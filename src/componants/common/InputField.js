import React from 'react';

const InputField = ({name, label, value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="{name}Input">
				{label}
			</label>
			<input type="text" value={value} 
				className="form-control" 
				name={name}
				onChange={onChange}
				placeholder={label}/>
		</div>
	);
};

InputField.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
};

export default InputField;