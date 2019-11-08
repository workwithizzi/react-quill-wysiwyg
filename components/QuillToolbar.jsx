import PropTypes from "prop-types";

import { Heart } from "./buttons/Heart";
import Background from "./buttons/Background";

const QuillToolbar = (props) => {
	return (
		<div id="toolbar">

			{/* Background format */}
			{
				props.background ? 
					props.background.length === 0 ?
						<select className="ql-background" /> :
						<Background background={props.background} /> : null
			}

			{/* Bold format */}
			{
				props.bold ? <button className="ql-bold" /> : null
			}

			{/*
			<select className="ql-color" />
			<select className="ql-font">
				<option defaultValue="arial">Arial</option>
				<option value="sans-serif">Sans Serif</option>
				<option value="comic-sans">Comic Sans</option>
				<option value="courier-new">Courier New</option>
				<option value="georgia">Georgia</option>
				<option value="helvetica">Helvetica</option>
				<option value="lucida">Lucida</option>
			</select>
			<select className="ql-size">
				<option value="extra-small">Size 1</option>
				<option value="small">Size 2</option>
				<option defaultValue="medium">Size 3</option>
				<option value="large">Size 4</option>
			</select>
			<select className="ql-align" />
			<button className="ql-clean" />
			*/}
			<button className="ql-insertHeart">
				<Heart />
			</button> 
		</div>
	);
};

QuillToolbar.defaultProps = {
	background: null,
	bold: false,
};

QuillToolbar.propTypes = {
	background: PropTypes.arrayOf(PropTypes.string),
	bold: PropTypes.bool,
};

export default QuillToolbar;
