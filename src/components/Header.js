import React from 'react'
import styled from 'styled-components'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
const Styles = styled.div`
.header {
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    justify-content: space-evenly;
    border-bottom: 0.1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    z-index: 999;
}
.header__left {
    display: flex;
}
.header__left > img{
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
}
.header__search {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22 px;
    color: gray;
    background-color: #eef3f8;

}
.header__search > input{
    outline: none;
    border: none;
    background: none;
}
.header__right {
    display: flex;

}

`
function Header() {
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logout())
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                console.log('succesfully logged out');
            })
            .catch(() => console.log('something went wrong with logout'))
    }
    return (
        <Styles>
            <div className='header'>
                <div className="header__left">
                    <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="icon"/>
                    <div className="header__search">
                        <SearchIcon />
                        <input placeholder='Search' type="text" />
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                    <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                    <HeaderOption Icon={ChatIcon} title='Messaging'/>
                    <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                    <HeaderOption onClick={logoutUser} avatar="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png" title='me'/>
                </div>
            </div>

        </Styles>
    )
}

export default Header
