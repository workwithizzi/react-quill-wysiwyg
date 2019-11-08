import React from "react";
import Head from "next/head";
import ReactQuill, { Quill } from "react-quill";
import PropTypes from "prop-types";

// Apply styles for the custom formats
import "../public/styles/font-styles.css";
import "../public/styles/sizes-styles.css";

// Quill Config
import QuillToolbar from "./QuillToolbar";
import QuillModules from "./QuillModules";

let QuillFormats = [];
class QuillEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { html: "", deltas: "", formats: [] };
		this.handleChange = this.handleChange.bind(this);
		this.mapPropsToFormats = this.mapPropsToFormats.bind(this);
		// Add fonts to whitelist and register them
		// const Font = Quill.import("formats/font");
		// Font.whitelist = [
		// 	"arial",
		// 	"comic-sans",
		// 	"courier-new",
		// 	"georgia",
		// 	"helvetica",
		// 	"lucida",
		// ];
		// Quill.register(Font, true);

		// // Add sizes to whitelist and register them
		// const Size = Quill.import("formats/size");
		// Size.whitelist = ["extra-small", "small", "medium", "large"];
		// Quill.register(Size, true);
	}

	componentDidUpdate() {
		QuillFormats = [];
	}

	mapPropsToFormats() {
		const formats = [];
		const mapPropsToArray = Object.keys(this.props);
		mapPropsToArray.map(prop => {
			// scan for props that are not related to Quill Formats
			if (prop !== "placeholder") {
				formats.push(prop);
			}
		});
		return formats;
	}

	handleChange(content, delta, source, editor) {
		this.setState({ html: editor.getHTML(), deltas: editor.getContents() });
	}

	render() {
		QuillFormats = this.mapPropsToFormats();
		return (
			<>
				<Head>
					<link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
					<title>Quill Test</title>
				</Head>
				<div>
					<div className="text-editor">
						<QuillToolbar background={this.props.background} bold={this.props.bold} />
						<ReactQuill
							value={this.state.html}
							onChange={this.handleChange}
							placeholder={this.props.placeholder}
							modules={QuillModules}
							formats={QuillFormats}
						/>
					</div>
				</div>

				<div>
					<p>HTML:</p>
					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state.html, null, 2)}
					</pre>
				</div>

				<div>
					<p>Deltas:</p>
					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state.deltas, null, 2)}
					</pre>
				</div>
			</>
		);
	}
}

QuillEditor.defaultProps = {
	placeholder: "Write something ...",
	background: null,
	bold: false,
};

QuillEditor.propTypes = {
	placeholder: PropTypes.string,
	background: PropTypes.arrayOf(PropTypes.string),
	bold: PropTypes.bool,
};

export default QuillEditor;
