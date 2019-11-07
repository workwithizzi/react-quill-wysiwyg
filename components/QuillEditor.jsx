import React from "react";
import Head from "next/head";
import ReactQuill, { Quill } from "react-quill";

// Apply styles for the custom formats
import "../public/styles/font-styles.css";
import "../public/styles/sizes-styles.css";

import { Heart, insertHeart } from "./buttons/Heart";

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
	"arial",
	"comic-sans",
	"courier-new",
	"georgia",
	"helvetica",
	"lucida",
];
Quill.register(Font, true);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);


const CustomToolbar = () => (
	<div id="toolbar">
		<select className="ql-background" />
		<button className="ql-bold" />
		<select className="ql-color" />
		<select className="ql-font">
			<option defaultValue="arial">Arial</option>
			<option value="sans-serif">Sans Serif</option>
			<option value="comic-sans">Comic Sans</option>
			<option value="courier-new">Courier New</option>
			<option value="georgia">Georgia</option>
			<option value="helvetica">Helvetica</option>
			<option value="lucida">Lucida</option>
		</select>
		<select className="ql-size">
			<option value="extra-small">Size 1</option>
			<option value="small">Size 2</option>
			<option defaultValue="medium">Size 3</option>
			<option value="large">Size 4</option>
		</select>
		<select className="ql-align" />
		<button className="ql-clean" />
		<button className="ql-insertHeart">
			<Heart />
		</button>
	</div>
);

export default class QuillEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { html: "", deltas: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(content, delta, source, editor) {
		this.setState({ html: editor.getHTML(), deltas: editor.getContents() });
	}

	static modules = {
		toolbar: {
			container: "#toolbar",
			handlers: {
				insertHeart: insertHeart,
			},
		},
	};

	static formats = [
		"background",
		"bold",
		"color",
		"font",
		"size",
		"align",
	];

	render() {
		return (
			<>
				<Head>
					<link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
					<title>Quill Test</title>
				</Head>
				<div>
					<div className="text-editor">
						<CustomToolbar />
						<ReactQuill
							value={this.state.html}
							onChange={this.handleChange}
							placeholder={this.props.placeholder}
							modules={QuillEditor.modules}
							formats={QuillEditor.formats}
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
