import styled from 'styled-components'
const Styles = styled.div`
.inputOption {
display: flex;
align-items: center;
margin-top: 15px;
color: gray;
padding: 10px;
cursor: pointer;
&:hover {
    background-color: whitesmoke;
    border-radius: 10px;
}
}
.inputOption > h4 {
margin-left: 5px;

}
`
function InputOption({
    title,
    Icon,
    onClick
}) {


    return (
        <Styles>
            <div onClick={onClick} className="inputOption">
                <Icon className='icon'/>
                <h4>{title}</h4>
            </div>
        </Styles>

    )
}

export default InputOption
