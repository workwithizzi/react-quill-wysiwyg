import React from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import Icon from "react-icons-kit";
import { bold } from "react-icons-kit/feather/bold";
import { italic } from "react-icons-kit/feather/italic";
import { code } from "react-icons-kit/feather/code";
import { list } from "react-icons-kit/feather/list";
import { underline } from "react-icons-kit/feather/underline";

import { MarkBold, MarkItalic } from "./marks";
import { FormatToolbar } from "./FormatToolbar";



// Create our initial value...
const initialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				object: "block",
				type: "paragraph",
				nodes: [
					{
						object: "text",
						text: "A line of placeholder text in a paragraph.",
					},
				],
			},
		],
	},
});


const ToolTip = props => (
	<button style={{"border":"0"}}
		// onPointerDown={(e) => this.onMarkClick(e, props.type)}
		className="tooltip-icon-button"
	>
		<Icon icon={bold} />
	</button>
);



class SlateEditor extends React.Component {
	// Set the initial value when the app is first constructed.
	state = {
		value: initialValue,
	}
	// On change, update the app's React state with the new editor value.
	onChange = ({ value }) => {
		this.setState({ value });
	}

	onKeyDown = (e, change) => {
		console.log(e.key);
		// Make sure all commands start with user pressing ctrl
		if (!e.ctrlKey) { return; }
		e.preventDefault();

		// Decide what to do based on the key code
		switch (e.key) {
		// When "b" is pressed, add a "bold" mark to the text.
		case "b": {
			change.toggleMark("bold");
			return true;
		}
		case "i": {
			change.toggleMark("italic");
			return true;
		}
		case "c": {
			change.toggleMark("code");
			return true;
		}
		case "l": {
			change.toggleMark("list");
			return true;
		}
		case "u": {
			change.toggleMark("underline");
			return true;
		}
		default: {
			return;
		}
		}
	}

		renderMark = props => {
			switch (props.mark.type) {
			case "bold":
				return <MarkBold {...props} />;
			case "italic":
				return <MarkItalic {...props} />;
			case "code":
				return <code {...props.attributes}>{props.children}</code>;
			case "list":
				return (
					<ul {...props.attributes}>
						<li>{props.children}</li>
					</ul>
				);
			case "underline":
				return <u {...props.attributes}>{props.children}</u>;
			}
		};

	// Reference the editor for "onMarkClick"
	ref = editor => { this.editor = editor; }

	onMarkClick = (e, type) => {
		// Disable default browser behavior
		e.preventDefault();
		// Update the selected text
		this.editor.toggleMark(type);

	}


	render() {
		return (
			<>
				<div className="editor-wrapper">
					<FormatToolbar>
						{/* <button
							onPointerDown={(e) => this.onMarkClick(e, "bold")}
							className="tooltip-icon-button"
						>
							<Icon icon={bold} />
						</button> */}
						<ToolTip type="bold" />
						<button
							onPointerDown={(e) => this.onMarkClick(e, "italic")}
							className="tooltip-icon-button"
						>
							<Icon icon={italic} />
						</button>
						<button
							onPointerDown={(e) => this.onMarkClick(e, "code")}
							className="tooltip-icon-button"
						>
							<Icon icon={code} />
						</button>
						<button
							onPointerDown={(e) => this.onMarkClick(e, "list")}
							className="tooltip-icon-button"
						>
							<Icon icon={list} />
						</button>
						<button
							onPointerDown={(e) => this.onMarkClick(e, "underline")}
							className="tooltip-icon-button"
						>
							<Icon icon={underline} />
						</button>
					</FormatToolbar>
					<Editor
						value={this.state.value}
						onChange={this.onChange}
						onKeyDown={this.onKeyDown}
						renderMark={this.renderMark}
						ref={this.ref}
					/>
				</div>

				{/* For Testing Purposes */}
				<div>
					<p>State:</p>
					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state, null, 2)}
					</pre>
				</div>

				<style jsx>{`
					.tooltip-icon-button {
						border: 0;
					}
					.editor-wrapper {
						background: white;
						font-family: sans-serif;
						color: #333;
						max-width: 740px;
						box-shadow: 0px 16px 24px 0px;
						padding: 20px 40px;
						margin: 65px auto 45px;
						border-radius: 4.5px;
					}
				`}</style>
			</>
		);
	}
}

export { SlateEditor };
