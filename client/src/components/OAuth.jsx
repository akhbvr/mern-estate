import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error } = useSelector((state) => state.user)
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            dispatch(signInStart())
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: result.user.displayName, email:result.user.email, photo: result.user.photoURL})
            })
            const data = await res.json()
            if(data.success === false){
                dispatch(signInFailure(data.message))
            }

            dispatch(signInSuccess(data))
            navigate("/")
        } catch (error) {
            dispatch(signInFailure(error.message))
            console.log("Could not sign in with google", error);
        }
    }

  return (
    <button disabled={loading} onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-50'>{loading ? "Loading..." : "Continue with Google"}</button>
  )
}
