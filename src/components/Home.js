import React, { useEffect, useRef, useState } from 'react'
import Chat from './Chat'
import Message from './Message'
import { io } from 'socket.io-client'

export default function Home() {
    const [yourId, setYourId] = useState()
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = io.connect('/')

        socketRef.current.on('your id', id => {
            setYourId(id)
        })

        socketRef.current.on('message', message => {
            receivedMessage(message)
        })
    })

    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message])
    }

    return (
        <div>
            <Chat />
            <Message />
        </div>
    )
}
