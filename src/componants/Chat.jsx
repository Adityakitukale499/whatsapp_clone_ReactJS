import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import '../style/chat.css'
import Mgs from './Mgs';
import ChatHome from './ChatHome';
const Chat = (props) => {
    const [chat, setChat] = useState()
    const [name, setName] = useState('')
    const [mgs, setMgs] = useState('')
    const [sent, setSent] = useState('sender')
    const [massages, setMassages] = useState([])
    const [img, setImg] = useState('')
    const handleSent = (e) => {
        e.preventDefault()
        console.log(mgs, sent);
        if (sent === 'sender') {
            setMassages([...massages, { 'sender': mgs }])
        }
        else {
            setMassages([...massages, { 'reciever': mgs }])

        }
        document.querySelector('#inp').value = ''
    }
    useEffect(() => {
        if (props.chats) {
            setChat(props.chats)
        }
    })
    useEffect(() => {
        if ((JSON.parse(localStorage.getItem(chat))) !== null) {
            setMassages(JSON.parse(localStorage.getItem(chat)).chat)
            setName(JSON.parse(localStorage.getItem(chat)).name)
        }
        console.log(massages);
        console.log(props.image);
        setImg(props.image)

    }, [chat])
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem(chat))
        console.log(massages);
        if (data !== null) {
            data.chat = massages
            localStorage.setItem(data.id, JSON.stringify(data))
        }
    }, [massages])
    return (
        <div className='chat'>
            {name ? (<><div className="chat_header">
                <Avatar src={img}/>
                <div className="chat_headerInfo">
                    <h3>{name}</h3>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

                <div className="chat_body ">
                    {
                        massages.map((ele, i) => (
                            <Mgs key={i} obj={ele} />
                        ))
                    }

                </div>
                <div className="chat_footer">
                    <IconButton>
                        <EmojiEmotionsIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <form >
                        <input type="text" id='inp' placeholder='type your massage' onChange={(e) => setMgs(e.target.value)} />
                        <select className='selectSender' onChange={(e) => setSent(e.target.value)} >
                            <option value="sender">Sent</option>
                            <option value="reciever">Reciev</option>
                        </select>
                        <button id='send_btn' onClick={handleSent}>
                            <SendIcon />
                        </button>
                    </form>
                    <IconButton>
                        <MicIcon />
                    </IconButton>

                </div></>) : (<ChatHome/>)}
        </div>
    )
}

export default Chat