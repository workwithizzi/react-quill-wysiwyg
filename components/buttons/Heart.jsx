const Heart = () => <span>♥</span>;

function insertHeart() {
	const cursorPosition = this.quill.getSelection().index;
	this.quill.insertText(cursorPosition, "♥");
	this.quill.setSelection(cursorPosition + 1);
}

export {
	Heart,
	insertHeart,
};
