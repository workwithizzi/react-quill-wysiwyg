import React from "react";
import Head from "next/head";
import ReactQuill from "react-quill";

// import "quill/dist/quill.snow.css";

// import Quill from "quill/core";
// import Toolbar from "quill/modules/toolbar";
// import SnowTheme from "quill/themes/snow";

export default class QuillEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: "" }; // You can also pass a Quill Delta here
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ text: value });
	}

	// componentDidMount() {

	// 	Quill.register({
	// 		"themes/snow": SnowTheme,
	// 		"modules/toolbar": Toolbar,
	// 	});

	// 	new Quill("#editor", {
	// 		theme: "snow",
	// 		placeholder: "Write something awesome...",
	// 	});
	// }

	render() {
		return (
			<>
				<Head>
					<link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
					<title>Quill Test</title>
				</Head>
				<div>
					<ReactQuill value={this.state.text} onChange={this.handleChange} />

					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state, null, 2)}
					</pre>

					{/* <div id="QuillEditor-container">
						<div id="editor">
							<p>Hello World!</p>
							<p>Some initial <strong>bold</strong> text</p>
						</div>
					</div> */}
				</div>
			</>
		);
	}
}
