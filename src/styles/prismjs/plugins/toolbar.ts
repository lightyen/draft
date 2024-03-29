import tw, { css } from "twin.macro"

export default css`
	div.code-toolbar > .toolbar {
		position: absolute;
		top: 0.3rem;
		right: 0.2rem;
		${tw`transition`}
		opacity: 0;
		user-select: none;
	}

	div.code-toolbar:hover > .toolbar {
		opacity: 1;
	}

	div.code-toolbar > .toolbar .toolbar-item {
		display: inline-block;
	}

	div.code-toolbar > .toolbar a {
		cursor: pointer;
	}

	div.code-toolbar > .toolbar button {
		background: none;
		border: 0;
		color: inherit;
		font: inherit;
		line-height: normal;
		overflow: visible;
		padding: 0;

		user-select: none;
	}

	div.code-toolbar > .toolbar a,
	div.code-toolbar > .toolbar button,
	div.code-toolbar > .toolbar span {
		${tw`text-sm px-2 transition`}
		background: rgba(224, 224, 224, 0.2);
		box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
	}

	div.code-toolbar > .toolbar a:hover,
	div.code-toolbar > .toolbar a:focus,
	div.code-toolbar > .toolbar button:hover,
	div.code-toolbar > .toolbar button:focus,
	div.code-toolbar > .toolbar span:hover,
	div.code-toolbar > .toolbar span:focus {
		text-decoration: none;
	}

	div.code-toolbar {
		position: relative;
	}

	.toolbar {
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 0;
		margin-right: 0.3rem;
	}
`
