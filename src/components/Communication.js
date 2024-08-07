import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../style/Communication.css';

const Communication = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('');
    const [userFullName, setUserFullName] = useState('');

    const socket = io("http://localhost:3000");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');
        const firstName = urlParams.get('firstname');
        const lastName = urlParams.get('lastname');

        setUserId(userId);
        setUserFullName(`${firstName} ${lastName}`);

        fetchOldMessages();

        socket.on("chat message", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const scrollToBottom = () => {
        const messagesDiv = document.getElementById("messages");
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    const adjustMessagesHeight = () => {
        const messagesDiv = document.getElementById("messages");
        const numMessages = messages.length;
        const baseHeight = 200;
        const heightPerMessage = 20;
        const maxDivHeight = 400;

        const newHeight = Math.min(baseHeight + numMessages * heightPerMessage, maxDivHeight);
        messagesDiv.style.height = `${newHeight}px`;
    };

    const sendMessage = () => {
        if (userId && message.trim()) {
            socket.emit("chat message", { sender_id: userId, content: message });
            setMessage('');
        }
    };

    const convertToIST = (dateString) => {
        const date = new Date(dateString);
        const options = { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const fetchOldMessages = () => {
        fetch('/messages')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data);
                adjustMessagesHeight();
                scrollToBottom();
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    useEffect(() => {
        adjustMessagesHeight();
        scrollToBottom();
    }, [messages]);

    return (
        <div>
            <div className="allianceTitle">Alliance-Agenda</div>
            <div className="chatTitle">Chats</div>
            <div className="container">
                <div className="heading">
                    <span id="gg">{userFullName}</span>
                    <button id="refreshButton" onClick={() => window.location.reload()}>
                        <img src="./images/refreshLogo.png" alt="Refresh" />
                    </button>
                </div>
                <div id="messages">
                    {messages.map((msg, index) => {
                        const isSent = msg.sender_id === userId;
                        const sentAtIST = convertToIST(msg.sent_at);
                        const usernameClass = `username-color-${msg.sender_id % 6 + 1}`;
                        
                        return (
                            <div key={index} className={isSent ? 'sent' : 'received'}>
                                <div className="user-id">ID: {msg.sender_id}</div>
                                <div className={`${usernameClass} username-class`} id="username-id">
                                    {msg.fullName}
                                </div>
                                <div className="time">{sentAtIST}</div>
                                <div className="message-content">{msg.content}</div>
                            </div>
                        );
                    })}
                </div>
                <form id="message-form" onSubmit={handleSubmit}>
                    <input type="hidden" value={userId} />
                    <input
                        type="text"
                        id="message-input"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" id="submitButton">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Communication;
