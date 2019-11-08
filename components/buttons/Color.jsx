import PropTypes from "prop-types";

function Color(props) {

	const listColors = props.color.map((color, index) => (
		<option key={index} value={color} />
	));

	return (
		<select className="ql-color">
			{listColors}
		</select>
	);
}

Color.propTypes = {
	color: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Color;
