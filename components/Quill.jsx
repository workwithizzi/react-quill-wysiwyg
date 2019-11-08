import dynamic from "next/dynamic";

const Quill = dynamic(
	() => import("./QuillEditor"),
	{ ssr: false }
);

export default Quill;
