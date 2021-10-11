import React from 'react'

function MessageForm({
    value,
    onChange,
    onClick
}) {
    return (
        <form>
            <input value={value} onChange={onChange} type="text" />
            <button onClick={onClick} type="submit">Send</button>
        </form>
    )
}

export default MessageForm
