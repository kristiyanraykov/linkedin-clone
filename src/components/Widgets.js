import React from 'react'
import styled from 'styled-components'

import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Styles = styled.div`
.widgets {
    position: sticky;
    top: 80px;
    flex: 0.2;
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: fit-content;
    padding-bottom: 10px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.header > h2 {
    font-size: 16px;
    font-weight: 400;

}
.article {
    display: flex;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: whitesmoke;
    }
}
.articleLeft {
    color: #0177b7;
    margin-right: 5px;
}
.articleLeft > .MuiSvgIcon-root &&{
    font-size: 5px
}

.articleRight {
    flex: 1;
}
.articleRight > h4{
    font-size: 14px;
}
.articleRight > p {
    font-size: 12px;
    color: gray;
}

`
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="article">
            <div className="acrtileLeft">
                <FiberManualRecordIcon color='primary' fontSize="small"/>
            </div>
            <div className="articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <Styles>
            <div className='widgets'>
                <div className="header">
                    <h2>LinkedIn News</h2>
                    <InfoIcon />
                </div>
                {newsArticle('Something has happened !', 'Top News')}
                {newsArticle('Someone just bought a new car !', 'Cars & Auto')}
                {newsArticle('Some new song just got released', 'Music')}
                {newsArticle('New TV Show just came out', 'Movies & TV')}
                {newsArticle('Bear got out of zoo', 'Animals & Nature')}
            </div>
        </Styles>
    )
}

export default Widgets
