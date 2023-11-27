
import { initializeApp, getApps,getApp } from 'firebase/app';
import {ref,push,getDatabase} from 'firebase/database'
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
   }

if (!getApps().length) {
    initializeApp(firebaseConfig);
}
const db = getDatabase();
export const saveFormData = async (firstName, lastName, email, company, message, submissionDate) => {
    try {
        const formDataRef = ref(db, 'formData');

        const formData = {
            firstName,
            lastName,
            email,
            company,
            message,
            submissionDate  // Store the submission date
        };

        await push(formDataRef, formData);

    } catch (error) {
        console.error("Error saving form data: ", error);
        throw error;
    }
};


