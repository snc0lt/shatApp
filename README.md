This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm install`
### `npm start`

create a firebase account/project then add the config keys to your project..!
firebase config file
```javascript
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
})

const db = firebaseApp.firestore()

export default db
```
