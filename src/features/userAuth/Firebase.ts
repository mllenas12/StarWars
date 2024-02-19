import { useEffect } from "react";
import { auth } from "../../utils/Firebaseconfig"
import { onAuthStateChanged } from "firebase/auth";
import { TAuthState } from "../../types/types";
import { useAppDispatch } from "../../hooks/storeHooks";
import { login, logout } from "./userSlice";

export const Firebase = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser: TAuthState) => {
            if (currentUser) {
                dispatch(
                    login({
                        userName: currentUser.displayName,
                        userEmail: currentUser.email,
                    })
                );
            } else {
                dispatch(logout())
            }
        })
    }, [])
}



