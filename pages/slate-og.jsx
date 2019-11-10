
import { Editor } from "slate-react";
import { Value } from "slate";

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
						text: "A line of placholder text in a paragraph.",
					},
				],
			},
		],
	},
});


class Home extends React.Component {
	// Set the initial value when the app is first constructed.
	state = {
		value: initialValue,
	}

	// On change, update the app's React state with the new editor value.
	onChange = ({ value }) => {
		this.setState({ value });
	}

	// Render the editor.
	render() {
		return (
			<>
				<Editor value={this.state.value} onChange={this.onChange} />

				{/* <div>
					<p>HTML:</p>
					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state, null, 2)}
					</pre>
				</div> */}

				<div>
					<p>Json:</p>
					<pre style={{background:"#333", color:"white", margin:"30px 5px", padding:"10px"}}>
						{JSON.stringify(this.state, null, 2)}
					</pre>
				</div>
			</>
		);
	}
}


export default Home;
