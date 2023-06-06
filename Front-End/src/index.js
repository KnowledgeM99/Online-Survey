import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVuv1AMCAf23KWKhWxenX6-2BW0HzBoiM",
  authDomain: "survey-app-6dcf7.firebaseapp.com",
  projectId: "survey-app-6dcf7",
  storageBucket: "survey-app-6dcf7.appspot.com",
  messagingSenderId: "816657843800",
  appId: "1:816657843800:web:646a04e148b315dd5eac2d",
  measurementId: "G-8N7Q9E5G7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
