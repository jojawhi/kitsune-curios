import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	createAuthUserWithEmailAndPassword,
	creatUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import { SignUpContainer, SignUpHeading } from '../signup-form/signup-form.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	//const { setCurrentUser } = useContext(UserContext);

	//console.log('hit');

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			//setCurrentUser(user);

			await creatUserDocFromAuth(user, { displayName });

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email already in use.');
			} else {
				console.log('Could not create user', error.message);
			}
		}
	};

	return (
		<SignUpContainer>
			<SignUpHeading>Don't have an account?</SignUpHeading>
			<span>Sign up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
