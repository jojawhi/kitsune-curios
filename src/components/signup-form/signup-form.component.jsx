import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	createAuthUserWithEmailAndPassword,
	creatUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';
import '../signup-form/signup-form.styles.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		//const { displayName, email, password, confirmPassword } = event.target;

		//console.log(email.value, password.value, confirmPassword.value);

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			const userDocRef = await creatUserDocFromAuth(user, { displayName });
			resetFormFields();
			//if succeeded, inform user, clear form
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email already in use.');
			} else {
				console.log('could not create user', error.message);
			}
		}
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
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
		</div>
	);
};

export default SignUpForm;