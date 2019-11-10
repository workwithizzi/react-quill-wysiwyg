
function FormatToolbar(props) {
	return (
		<>
			<div className="format-toolbar">{props.children}</div>
			<style jsx>{`
				.format-toolbar {
					display: flex;
					border-bottom: solid grey 1px;
					padding: 10px 0;
					margin 0 0 10px 0;
				}
			`}</style>
		</>
	);
}

export { FormatToolbar };
