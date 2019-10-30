import React from "react";

import "quill/dist/quill.snow.css";

import Quill from "quill/core";
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

export default class QuillEditor extends React.Component {

	componentDidMount() {

		Quill.register({
			"themes/snow": Snow,
			"modules/toolbar": Toolbar,
		});

		new Quill("#editor", {
			theme: "snow",
			placeholder: "Write something awesome...",
		});
	}

	render() {
		return (
			<div>
				<div id="QuillEditor-container">
					<div id="editor">
						<p>Hello World!</p>
						<p>Some initial <strong>bold</strong> text</p>
					</div>
				</div>
			</div>
		);
	}
}
