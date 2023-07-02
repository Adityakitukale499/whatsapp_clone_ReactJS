import React from 'react'

const Help = () => {
    return (
        <div className='help'><h3>Creating a new chat:</h3>
            <ul>
                <li>Click "Add new Chat" on the sidebar.</li>
                <li>Enter the contact's name and click "OK".</li>
            </ul>
            <h3>Switching between chats:</h3>
            <ul>
                <li>Click on a chat in the sidebar to open it.</li></ul>                    <h3>Sending messages:</h3>
            <ul>
                <li>Type your message in the chat footer.</li>
                <li>Use the dropdown menu in the chat footer to change the sender/receiver.</li>
                <li>Click the send button.</li></ul>

            <h3>Viewing chat history:</h3>
            <ul>
                <li>The chat history will be displayed in the chat body.</li>
            </ul>
            <h3>Searching for chats:</h3>
            <ul>
                <li>Use the search bar in the sidebar to search for specific chats.</li>
            </ul>
            </div>
    )
}

export default Help