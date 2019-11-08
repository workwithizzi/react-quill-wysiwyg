import PropTypes from "prop-types";

import { Heart } from "./buttons/Heart";
import Background from "./buttons/Background";
import Color from "./buttons/Color";
import Font from "./buttons/Font";
import Size from "./buttons/Size";

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

			{/* Color format */}
			{
				props.color ? 
					props.color.length === 0 ?
						<select className="ql-color" /> :
						<Color color={props.color} />
					: null
			}

			{/* Font format */}
			{
				props.font ?
					<Font font={props.font} />
					: null
			}

			{/* Size format */}
			{
				props.size ?
					<Size size={props.size} />
					: null
			}

			{/* Align format */}
			{
				props.align ?
					<select className="ql-align" />
					: null
			}

			{
				props.clean ? 
					<button className="ql-clean" />
					: null
			}

			<button className="ql-insertHeart">
				<Heart />
			</button> 
		</div>
	);
};

QuillToolbar.defaultProps = {
	background: null,
	bold: false,
	color: null,
	font: null,
	size: null,
	align: false,
	clean: false,
};

QuillToolbar.propTypes = {
	background: PropTypes.arrayOf(PropTypes.string),
	bold: PropTypes.bool,
	color: PropTypes.arrayOf(PropTypes.string),
	font: PropTypes.arrayOf(PropTypes.string),
	size: PropTypes.arrayOf(PropTypes.string),
	align: PropTypes.bool,
	clean: PropTypes.bool,
};

export default QuillToolbar;
