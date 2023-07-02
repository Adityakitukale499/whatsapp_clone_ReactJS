import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import Help from './Help';
// import whatsapp from '../../public'

const ChatHome = () => {
  const [toggle,setToggle] = useState(false)
  function handleToggle(){
    setToggle(!toggle)
  }
  return (
    <>
    <img src='' alt="" />
      <div className="chat_header">
        <h1 style={{ textAlign: 'center', width: '100%' }}>
          Welcome To Whatsapp_Clone
        </h1>
      </div>
      <div className="chat_body chat_help">
        <IconButton onClick={handleToggle}>
          <HelpIcon />
        </IconButton>
        {toggle ? (<Help/>) : <img className='wh_img' src='whatsapp.png'/>}
      </div>
    </>
  )
}

export default ChatHome