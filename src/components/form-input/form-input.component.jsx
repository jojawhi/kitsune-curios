import { Group, Input, InputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<InputLabel
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</InputLabel>
			)}
		</Group>
	);
};

export default FormInput;
