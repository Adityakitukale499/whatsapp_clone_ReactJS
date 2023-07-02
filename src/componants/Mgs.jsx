import React from 'react'

const Mgs = (props) => {
    // console.log(props.obj.sender);
    return (
        <div>
            <p className={props.obj.sender?'chat_reciever':'chat_massage'} >
                {props.obj.sender?props.obj.sender:props.obj.reciever}
                <span className="chat_time">{new Date().toLocaleTimeString()}
                </span>
            </p>
        </div>
    )
}

export default Mgs