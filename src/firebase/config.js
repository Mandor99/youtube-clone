import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCtvQeSvcnz_necRxgLJaBVAqQE90-otg4',
	authDomain: 'clone-3f545.firebaseapp.com',
	projectId: 'clone-3f545',
	storageBucket: 'clone-3f545.appspot.com',
	messagingSenderId: '615699732842',
	appId: '1:615699732842:web:26286319755a3ce8c8ed13',
	measurementId: 'G-J6Q4BJ3GD6',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
