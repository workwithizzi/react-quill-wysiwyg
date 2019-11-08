import PropTypes from "prop-types";

function Font(props) {

	const listFonts = props.font.slice(1).map((font, index) => (
		<option key={index} value={font}>{font}</option>
	));

	return (
		<select className="ql-font">
			<option defaultValue={props.font[0]}>{props.font[0]}</option>
			{listFonts}
		</select>
	);
}

Font.propTypes = {
	font: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Font;
