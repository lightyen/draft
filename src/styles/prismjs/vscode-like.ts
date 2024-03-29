import tw, { css } from "twin.macro"

export default css`
	:root {
		--primary-text-color: #dfdfdf;
	}

	code[class*="language-"] {
		/* max-width: 100%; */
		/* width: 100%; */
		color: var(--primary-text-color);
		text-align: left;
		white-space: pre-wrap;
		word-spacing: normal;
		word-break: normal;
		word-wrap: break-word;
		tab-size: 4;
		hyphens: none;
	}

	.token.string {
		color: var(--primary-text-color);
	}

	.token.comment {
		color: #3c8b3c;
	}

	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: slategray;
	}

	.token.punctuation {
		color: #6c757d;
	}

	.token.property,
	.token.symbol,
	.token.prefix.deleted {
		color: #f92672;
	}
	.token.prefix.inserted {
		color: #3c8b3c;
	}

	.token.constant,
	.token.keyword,
	.token.tag {
		color: #569cd6;
	}
	.token.attr-name {
		color: #72acdb;
	}
	.token.script,
	.token.attr-value {
		color: #e7bba6;
	}
	.token.boolean,
	.token.number {
		color: #b5cea8;
	}
	.token.selector,
	.token.string,
	.token.char {
		color: #ce9178;
	}
	.token.template-string {
		color: #ce7878;
	}
	.token.builtin {
		color: #4ec9b0;
	}
	.token.operator,
	.token.entity,
	.token.url,
	.token.variable {
		color: var(--primary-text-color);
	}
	.token.atrule,
	.token.class-name {
		color: #4ec9b0;
	}
	.token.function {
		color: #e9e393;
	}

	.token.regex,
	.token.important {
		color: #fd971f;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
		${tw`font-bold`}
	}
	.token.italic {
		${tw`italic`}
	}

	.token.entity {
		cursor: help;
	}
`
