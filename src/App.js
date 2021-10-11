import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Login from './components/Login'
import Widgets from './components/Widgets';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(logout())
      }
    });
  }, [])
  return (
    <div className="app">
      {!user
        ? (<Login />)
        : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
