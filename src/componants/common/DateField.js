import React from 'react';

const DateField = ({name, label, value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="{name}Input">
				{label}
			</label>
			<input type="date" value={value} 
				className="form-control" 
				name={name}
				onChange={onChange}
				placeholder="dd-MM-yyyy"/>
		</div>
	);
};

DateField.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
};

export default DateField;