import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import '../style/sidebar.css'

const SidebarChats = (props) => {
  const [img, setImg] = useState(`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random()*70)}.jpg`)
  const showChat = (e) => {
    props.setChat(e.currentTarget.id)
    props.setImage(img)
    console.log(img);
  }

  return (
    <div className='sidebar_chat' id={props.id} onClick={showChat}>
      <Avatar src={img}/>
      <div className="sidebar_chatInfo">
        <h2>{props.name}</h2>
        <p>{new Date().toDateString()}</p>

      </div>
    </div>
  )
}

export default SidebarChats
