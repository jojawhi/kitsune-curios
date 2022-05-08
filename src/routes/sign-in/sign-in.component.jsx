import { signInWithGooglePopup, creatUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/signup-form/signup-form.component';
import Button from '../../components/button/button.component';

const SignIn = () => {
	// useEffect(() => {
	// 	const getResponse = async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await creatUserDocFromAuth(response.user);
	// 		}
	// 	};
	// 	getResponse();
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await creatUserDocFromAuth(user);
	};

	return (
		<div>
			<h1 className='heading'>Sign In</h1>
			<Button buttonType='google' onClick={logGoogleUser}>
				Sign in with Google
			</Button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}

			<SignUpForm />
		</div>
	);
};

export default SignIn;
