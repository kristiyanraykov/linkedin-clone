import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    const Styles = styled.div`
        .sidebar {
            top: 80px;
            position: sticky;
            flex: 0.2;
            border-radius: 10px;
            text-align: center;
            height: fit-content;
        }
        .avatar {
            margin-bottom: 10px;
        }
        .top {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid lightgray;
            border-bottom: 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: white;
            padding-bottom: 10px;
        }
        .top > img {
            margin-bottom: -20px;
            width: 100%;
            height: 60px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            object-fit: cover;
        }
        .top > h4 {
            color: gray;
            font-size: 12px;
        }
        .top > h2 {
            font-size: 18px;
        }
        .stats {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid lightgray;
            background-color: white;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .stat {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
        }
        .stat > p {
            color: gray;
            font-size: 13px;
            font-weight: 600;

        }
        .statNumber {
            font-weight: bold;
            color: #0a66c2 !important;

        }
        .bottom {
            text-align: left;
            padding: 10px;
            border: 1px solid lightgray;
            background-color: white;
            border-radius: 10px;
            margin-top: 10px;
        }
        .bottom > p {
            font-size: 13px;
            padding-bottom: 10px;
        }
        .recentItem {
            display: flex;
            color: grey;
            font-size: 13px;
            font-weight: bolder;
            cursor: pointer;
            margin-bottom: 5px;
            padding: 5px;
            &:hover {
                background-color: whitesmoke;
                border-radius: 10px;
                cursor: pointer;
                color: black;
            }
        }
        .hash {
            margin-right: 10px;
            margin-left: 5px;
        }
    `
    const recentItem = (topic) => (
        <div className="recentItem">
            <span className="hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <Styles>

            <div className='sidebar'>
                <div className='top'>
                    <img src='https://images.hdqwalls.com/wallpapers/bthumb/color-splash-mountains-abstract-4k-h6.jpg' alt='wallpaper' />
                    <Avatar className='avatar' />
                    <h2>Full Name</h2>
                    <h4> email@somemailclient.com </h4>
                </div>
                <div className="stats">
                <div className="stat">
                    <p>Whow viewed you</p>
                    <p className='statNumber'>2,547</p>
                </div>
                <div className="stat">
                    <p>Views on posts</p>
                    <p className='statNumber'> 3,567</p>
                </div>
            </div>
            </div>
          
            <div className="bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engeneering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </Styles>
    )
}

export default Sidebar
