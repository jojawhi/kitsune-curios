import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';
import '../authentication/authentication.styles.scss';

const Authentication = () => {
	// useEffect(() => {
	// 	const getResponse = async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await creatUserDocFromAuth(response.user);
	// 		}
	// 	};
	// 	getResponse();
	// }, []);

	return (
		<div className='authentication-container'>
			<SignInForm />
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}

			<SignUpForm />
		</div>
	);
};

export default Authentication;
