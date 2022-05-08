import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAy-vnPRdoJRjQch6wCUkb9wLBHXw2N_JI',
	authDomain: 'kitsune-db.firebaseapp.com',
	projectId: 'kitsune-db',
	storageBucket: 'kitsune-db.appspot.com',
	messagingSenderId: '233279155719',
	appId: '1:233279155719:web:db3464b23ed56f2b8084a2',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const creatUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	//console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	//console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	} else {
		return userDocRef;
	}
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	return await createUserWithEmailAndPassword(auth, email, password);
};
