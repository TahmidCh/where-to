import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const Login = () => {
    return (
        <div>
            <H1>This is login</H1>
        </div>
    );
};

export default Login;