//rfce
import { useState } from 'react';

import styled from 'styled-components'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
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
    const [posts, setPosts] = useState([])
    return (
        <Styles>
            <div className="feed">
                <div className="inputContainer">
                    <div className="input">
                        <CreateIcon />
                        <form>
                            <input type="text"/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="inputOptions">
                        <InputOption Icon={ImageIcon} title='Photo'/>
                        <InputOption Icon={SubscriptionsIcon} title='Video'/>
                        <InputOption Icon={EventNoteIcon} title='Event'/>
                        <InputOption Icon={CalendarViewDayIcon} title='Write article'/>
                    </div>
                </div>
                {posts.map((post) => 
                <Post />
                )}
                <Post name='Chris Raykov' description='some fancy description' message='so far so good'/>

            </div>
        </Styles>

    )
}

export default Feed
