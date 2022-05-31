import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import {
	SignInContainer,
	SignInHeading,
	ButtonsContainer,
} from '../sign-in-form/sign-in-form.styles';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	//const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		//setCurrentUser(user);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			//setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Wrong password.');
					break;
				case 'auth/user-not-found':
					alert('Wrong email.');
					break;
				default:
					console.log(error.message);
			}

			// if (error.code === 'auth/wrong-password') {
			// 	alert('Wrong email or password.');
			// } else if (error.code === 'auth/user-not-found') {
			// 	alert('Wrong email or password.');
			// } else {
			// 	alert(
			// 		'Sign in error. Please try again with the correct email and password.'
			// 	);
			// }

			// console.log(error.message);
		}

		resetFormFields();
	};

	return (
		<SignInContainer>
			<SignInHeading>Already have an account?</SignInHeading>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='text'
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType='google'
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
