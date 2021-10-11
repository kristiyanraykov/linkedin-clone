//rfce
import { useState, useEffect } from 'react';

import styled from 'styled-components'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {addPost, queryByTimestamp} from '../firebase'
import { onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import MessageForm from './MessageForm';

const Styles = styled.div`
.feed {
   flex: 0.6;
   margin: 0 20px;
   width: 1000px;
}
.inputContainer {
    background-color: white;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;    
}
.input {
    border: 1px solid lightgray;
    border-radius: 30px;
    display: flex;
    padding: 10px;
    color: gray;
    padding-left: 15px;
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
}
.input > form > button {
    display: none;
}
.inputOptions {
    display: flex;
    justify-content: space-evenly;
}
`

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(queryByTimestamp, (snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
          });    
    }, [])
    const sendPost = (e) => {
        e.preventDefault()
        console.log(user);
        addPost(
            user.displayName,
            user.email,
            input,
            user.photoUrl || '',
        )
        setInput('')
    }
    return (
        <Styles>
            <div className="feed">
                <div className="inputContainer">
                    <div className="input">
                        <CreateIcon />
                        <MessageForm value={input} onChange={(e)=> setInput(e.target.value)} onClick={sendPost}/>
                        {/* <form>
                            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text"/>
                            <button onClick={sendPost} type="submit">Send</button>
                        </form> */}
                    </div>
                    <div className="inputOptions">
                        <InputOption Icon={ImageIcon} title='Photo'/>
                        <InputOption Icon={SubscriptionsIcon} title='Video'/>
                        <InputOption Icon={EventNoteIcon} title='Event'/>
                        <InputOption Icon={CalendarViewDayIcon} title='Write article'/>
                    </div>
                </div>
                {posts.map(({id, data: { name, description, message, photoUrl}}) => 
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
                )}
            </div>
        </Styles>

    )
}

export default Feed
