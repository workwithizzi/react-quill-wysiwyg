import dynamic from "next/dynamic";

const EditorWithNoSSR = dynamic(
	() => import("../components/QuillEditor"),
	{ ssr: false }
);

function Home() {
	return (
		<EditorWithNoSSR placeholder={"Write something ..."}/>
	);
}

export default Home;
