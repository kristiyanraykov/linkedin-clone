import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


import { useState } from 'react'
import { login } from '../features/userSlice'
const Styles = styled.div`
.login {
    display: grid;
    place-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    padding-bottom: 100px;
}
.logo > img {
    object-fit: contain;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.login > form {
    display: flex;
    flex-direction: column;
}
.login > form > input {
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.login > form > button {
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 5px;
}
.register {
    color: #0074b1;
    cursor: pointer;
}
.login > p {
    margin-top: 20px;
}
`
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch();
    const auth = getAuth()

    const onRegisterButtonClick = (e) => {
        e.preventDefault()
        if (!name) {
            return alert('Please enter a full name')
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic
                })
                    // .then(() => {
                    //     // console.log(user);
                    //     // dispatch(login({
                    //     //     email: user.email,
                    //     //     uid: user.uid,
                    //     //     displayName: name,
                    //     //     photoURL: profilePic
                    //     // }))
                    // })
            })
            .catch(error => console.log(error))

    }
    const onLoginButtonClick = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(`user ${userCredential.user.displayName} logged in`);
                // Signed in 
                // const user = userCredential.user;
                // dispatch(login({
                //     email: user.email,
                //     uid: user.uid,
                //     displayName: user.displayName,
                //     photoURL: user.photoURL
                // }))
            })
            .catch((error) => alert(error));
    }
    return (
        <Styles>
            <div className="login">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png" alt="LinkedIn Logo"
                />
                <form>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering.)" type="text" />
                    <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                    <button type='submit' onClick={onLoginButtonClick}>Sign In</button>
                </form>
                <p>
                    Not a member?
                    <span className='register' onClick={onRegisterButtonClick} >Register Now</span>
                </p>


            </div>
        </Styles>

    )
}

export default Login
