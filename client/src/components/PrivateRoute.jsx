import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateProfile = () => {
    const { currentUser } = useSelector((state) => state.user)
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}

export const PrivateSignIn = () => {
    const { currentUser } = useSelector((state) => state.user)
    return currentUser ? <Navigate to='/profile'/> : <Outlet/>
}

export const PrivateSignUp = () => {
    const { currentUser } = useSelector((state) => state.user)
    return currentUser ? <Navigate to='/profile'/> : <Outlet/>
}