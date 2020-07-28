import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton'
import db from './fbConfig'
import './App.css';
import firebase from 'firebase'
import Messages from './Messages';



function App() {
  const [input, setInput] = useState('')
  const [username, setUserName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setUserName(prompt('Enter a username'))
  }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapShot => {
      setMessages(snapShot.docs.map(doc => ({
        message: doc.data(),
        id: doc.id
      })))
    })
  }, [])

  const sendMsg = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
      <h2>Welcome to shatApp {username}</h2>
      <Messages messages={messages} username={username} />
      <form className='app__form'>
        <FormControl className='app__formControl' >
          <Input className='app__input' placeholder='Enter a message' value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className='app__iconButton' color='primary' variant='contain' onClick={sendMsg} type="submit" disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
