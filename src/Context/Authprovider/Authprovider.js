import { createContext, useEffect, useState } from 'react';
import { useRouter } from "next/router";



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();


    const handelProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Register user
    const register = async (user) => {
        const res = await fetch(`https://staging-be-ecom.techserve4u.com/api/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            setUser(data.user);
            router.push("/login");
        } else {
            setError(data.message);
            setError(null);
        }
    };

    // const signIn = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // const signInGoogle = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);

    // }

    // const logOut = () => {
    //     return signOut(auth)
    // }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => unSubscribe();
    // }, [])

    const authInfo = { register };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;