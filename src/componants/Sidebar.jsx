import React, { useContext, useEffect, useState } from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Avatar, IconButton } from '@mui/material';
import "../style/sidebar.css"
import SidebarChats from './SidebarChats';
import { v4 as uuid } from 'uuid';
const Sidebar = ({ setChat, setImage }) => {
    const [contacts, setContacts] = useState([])
    const [searchBar,setSearchBar] = useState('')
    useEffect(() => {
        setContacts(Object.keys(localStorage))
    }, [])
    const SearchChange=(e)=>{
        setSearchBar(e.target.value)
        // console.log();
    }
    const createChat = () => {
        const contact = prompt('Add contact')
        const unique_id = uuid().slice(0, 8);
        console.log(unique_id)
        // alert(contact)
        if (contact && localStorage.getItem(contact) === null) {
            const obj = {
                id: unique_id,
                name: contact,
                time: new Date().toLocaleTimeString(),
                chat: [{ sender: 'hi this side Aditya'}],

            }
            localStorage.setItem(unique_id, JSON.stringify(obj))
        }
        setContacts(Object.keys(localStorage))
    }
    return (
        <div className="sideBar">
            <div className="sidebar_header">
                <Avatar src={`https://xsgames.co/randomusers/assets/avatars/male/75.jpg`}/>

                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <IconButton>
                        <ManageSearchIcon />
                    </IconButton>
                    <input type="text" placeholder='Search or Start a new Chat' onChange={SearchChange}/>
                </div>
            </div>
            <div className="sidebar_Chats">
                <div className='sidebar_chat' onClick={createChat}>
                    <h2>Add new Chat</h2>
                </div>
                {contacts.map((ele) => {
                    const obj = localStorage.getItem(ele)
                    const info = JSON.parse(obj);
                    return (
                        
                        <SidebarChats time={info.time} key={info.id} name={info.name} chat={info.chat} id={info.id} setChat={setChat} setImage={setImage}/>
                    )
                })}

                {/* <SidebarChats /> */}
            </div>
        </div>
    )
}

export default Sidebar