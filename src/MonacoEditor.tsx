import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { MonacoMarkdownExtension } from "monaco-markdown"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { useDispatch } from "react-redux"
import "twin.macro"
import { useDebounce } from "~/hooks"
import { instance, setDraft, useSelector } from "~/store"
import { useScrollBarSource } from "./components/ScrollBar"

export default function MainEditor() {
	const draft = useSelector(state => state.draft)
	const defaultDraft = useRef(draft)
	const dispatch = useDispatch()
	const cb = useCallback(
		(value: string) => {
			dispatch(setDraft(value))
		},
		[dispatch],
	)
	const debounceSetDraft = useDebounce(cb)

	return useMemo(() => <Wrapper defaultValue={defaultDraft.current} onChange={e => debounceSetDraft(e)} />, [
		debounceSetDraft,
	])
}

interface Props {
	defaultValue: string
	onChange: (value: string) => void
}

const Wrapper: React.FC<Props> = props => {
	const vw = useSelector(state => state.vw)
	return (
		<div tw="sticky top-0 overflow-hidden" style={{ width: `${vw}vw`, height: "100vh" }}>
			<MonacoEditor {...props} />
		</div>
	)
}

function MonacoEditor({ defaultValue, onChange }: Props) {
	const scrollbar = useScrollBarSource()
	const dispatch = useDispatch()

	useEffect(() => {
		const model = monaco.editor.createModel(defaultValue, "markdown")
		model.updateOptions({
			tabSize: 4,
		})
		const editor = monaco.editor.create(document.getElementById("monaco-editor"), {
			renderWhitespace: "boundary",
			renderIndentGuides: true,
			scrollbar: {
				vertical: "auto",
				horizontal: "auto",
			},
			theme: "vs-dark",
			scrollBeyondLastLine: false,
			fontLigatures: true,
			fontFamily: "Cascadia Mono",
			find: {
				addExtraSpaceOnTop: false,
			},
			smoothScrolling: true,
			autoClosingBrackets: "always",
			autoClosingQuotes: "always",
			model,
		})
		instance.monaco = editor

		editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
			/** */
		})

		const extension = new MonacoMarkdownExtension()
		extension.activate(editor as never)
		// editor.updateOptions({ fontSize: 16 })
		editor.onDidChangeModelContent(event => {
			onChange(editor.getValue())
		})
		editor.onDidScrollChange(e => {
			const percentage = editor.getScrollTop() / (editor.getScrollHeight() - editor.getLayoutInfo().height)
			const cTop = percentage * (scrollbar.scrollHeight - scrollbar.clientHeight)
			scrollbar.scrollTop = cTop
		})
		return () => {
			model.dispose()
			editor.dispose()
		}
	}, [defaultValue, scrollbar, onChange, dispatch])
	return <div id="monaco-editor" style={{ height: "100%" }} />
}
