import styled from 'styled-components'

function InputOption({
    title,
    Icon
}) {
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

    return (
        <Styles>
            <div className="inputOption">
                <Icon className='icon'/>
                <h4>{title}</h4>
            </div>
        </Styles>

    )
}

export default InputOption
