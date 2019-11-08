import Quill from "./../components/Quill";

function Home() {
	return (
		<Quill
			placeholder="Write something ..."
			background={["red", "green", "blue"]}
			bold
			color={[]}
			font={["arial", "sans-serif", "serif", "monospace", "comic-sans", "courier-new", "georgia", "helvetica", "lucida"]}
			size={["extra-small", "small", "medium", "large"]}
			align
			clean
		/>
	);
}

export default Home;
