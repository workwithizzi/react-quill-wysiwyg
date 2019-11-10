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
		/>
	);
}

export default Home;
