import React from 'react'
import FlipMove from 'react-flip-move'
import Message from './Message';
import './Message.css'
const Messages =({messages, username})=> {
  return (
    <div className='messages'>
      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message key={id} message={message} username={username} />
          ))
        }
      </FlipMove>
    </div>
  )
}

export default Messages
