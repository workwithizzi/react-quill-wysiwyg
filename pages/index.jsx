import dynamic from "next/dynamic";

const EditorWithNoSSR = dynamic(
	() => import("../components/QuillEditor"),
	{ ssr: false }
);

function Home() {
	return (
		<EditorWithNoSSR
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
