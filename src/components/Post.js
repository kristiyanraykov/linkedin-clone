import { useState } from 'react';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import InputOption from './InputOption'
import MessageForm from './MessageForm';
const Styles = styled.div`
.post {
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
}
.header {
    display: flex;
    margin-bottom: 10px;

}
.info {
    margin-left: 10px;
}
.info > p {
    font-size: 12px;
    color: gray;
}
.info > h2 {
    font-size: 15px;
}
.body {
    overflow-wrap: anywhere;
}
.buttons {
    display: flex;
    justify-content: space-evenly;
}
.input > form {
    display: flex;
    width: 100%;
}
.input > form > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
    display: block;
    width: 100%;
    display: block;
}
.input > form > button {
    display: none;
}

`
function Post({
    name,
    description,
    message,
    photoUrl
}) {
    const [commentClicked, setCommentClicked] = useState(false);
    const onCommentClick = (e) => {
        setCommentClicked(!commentClicked);
    }
    return (
        <Styles>
            <div className="post">
                <div className="header">
                    <Avatar src={photoUrl}></Avatar>
                    <div className="info">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="body">
                    <p>{message}</p>
                </div>
                <div className="buttons">
                    <InputOption Icon={ThumbUpAltIcon} title="like"/>
                    <InputOption onClick={onCommentClick} Icon={ChatBubbleOutlineIcon} title="Comment"/>
                    { commentClicked 
                    ? <div className="input"><MessageForm/></div>
                    : null
                    }
                    <InputOption Icon={ShareOutlinedIcon} title="Share"/>
                    <InputOption Icon={SendOutlinedIcon} title="Send"/>
                </div>
            </div>
        </Styles>
    )
}

export default Post
