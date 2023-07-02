import React,{ useEffect, useState } from 'react'
import './App.css'
// import { Avatar } from '@mui/material'
import Sidebar from './componants/Sidebar'
import Chat from './componants/Chat'
// import {Context} from './Context'
function App() {
  const [chat,setChat]=useState('')
  const [image,setImage] = useState('')
  // console.log(chat);
  return (
    <>
      <div className="App">
        <div className="app_body">
          <Sidebar setImage={setImage} setChat={setChat}/>
            <Chat image={image} setImage={setImage} chats={chat} setChat={setChat}/>
          
        </div>
      </div>
    </>
  )
}

export default App
