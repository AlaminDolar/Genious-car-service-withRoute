import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseAuthentication from '../Pages/Home/Login/Firebase/firebase.init';

firebaseAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    const SignInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvier = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvier)
            .then(result => {
                setUsers(result.user);

            }) .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({});
            }  setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true); 
        signOut(auth)
            .then(() => { })
           
            .finally(() => setIsLoading(false));
    }


    return {
        SignInUsingGoogle,
        logout,
        users,
        isLoading

    }
}



export default useFirebase;
