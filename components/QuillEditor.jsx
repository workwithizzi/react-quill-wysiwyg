import React from "react";
import Head from "next/head";
import ReactQuill from "react-quill";

export default class QuillEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { html: "", deltas: "" }; // You can also pass a Quill Delta here
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(content, delta, source, editor) {
		this.setState({ html: editor.getHTML(), deltas: editor.getContents() });
	}

	render() {
		return (
			<>
				<Head>
					<link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
					<title>Quill Test</title>
				</Head>
				<div>
					<ReactQuill value={this.state.html} onChange={this.handleChange} />

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
				</div>
			</>
		);
	}
}
