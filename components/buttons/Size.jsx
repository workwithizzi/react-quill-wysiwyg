import PropTypes from "prop-types";

function Size(props) {

	const listSizes = props.size.slice(1).map((size, index) => (
		<option key={index} value={size}>{size}</option>
	));

	return (
		<select className="ql-size">
			<option defaultValue={props.size[0]}>{props.size[0]}</option>
			{listSizes}
		</select>
	);
}

Size.propTypes = {
	size: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Size;


