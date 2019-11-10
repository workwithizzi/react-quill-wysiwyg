
// Bold Text
const MarkBold = props => (
	<strong>
		{props.children}
	</strong>
);

// Italic Text
const MarkItalic = props => (
	<em property="italic">
		{props.children}
	</em>
);

export { MarkBold, MarkItalic };
