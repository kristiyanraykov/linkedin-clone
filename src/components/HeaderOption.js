import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectUser } from '../features/userSlice'
const Styles = styled.div`
.headerOption {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;
    &:hover {
        color: black;

    }

}
.headerOption__title{
    font-size: 12px;
    font-weight: 400;
}
.headerOption__icon{
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
}
`
function HeaderOptions({
    avatar,
    Icon,
    title,
    onClick
}) {
    const user = useSelector(selectUser)
    return (
        <Styles>
            <div onClick={onClick} className='headerOption'>
                {Icon && <Icon className='headerOption__icon' />}
                {avatar && <Avatar className='headerOption__icon' src={user.photoUrl}>{user?.email[0]}</Avatar>}
                <h3 className='headerOption__title'>{title}</h3>
            </div>

        </Styles>
    )
}

export default HeaderOptions
