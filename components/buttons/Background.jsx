import PropTypes from "prop-types";

function Background(props) {

	const listColors = props.background.map((color, index) => (
		<option key={index} value={color} />
	));

	return (
		<select className="ql-background">
			{listColors}
		</select>
	);
}

Background.propTypes = {
	background: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Background;
