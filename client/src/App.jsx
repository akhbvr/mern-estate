import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Header from './components/Header'
import { PrivateProfile, PrivateSignIn, PrivateSignUp } from './components/PrivateRoute'

export default function App() {
  return <BrowserRouter>

  <Header />
  <Routes>

    <Route path='/' element={ <Home /> } />
    <Route element={ <PrivateSignIn/> }>
      <Route path='/sign-in' element={ <SignIn /> } />
    </Route>
    <Route element={ <PrivateSignUp/>}>
      <Route path='/sign-up' element={ <SignUp /> } />
    </Route>
    <Route path='/about' element={ <About /> } />
    <Route path='/listing/:listingId' element={ <Listing /> } />
    <Route element={ <PrivateProfile /> } >
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/create-listing' element={ <CreateListing /> } />
      <Route path='/update-listing/:listingId' element={ <UpdateListing /> } />
    </Route>
  </Routes>

  </BrowserRouter>
}
