import React from 'react'

export default function Message() {
    return (
        <form id='send-container'>
            <input type='text' id='message-input' />
            <button type='submit' id='send-button'>Send</button>
        </form>
    )
}
