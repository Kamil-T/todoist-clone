import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBH4APkYXYSvb3waRRlyYuJ6zXXE5kB2UU',
  authDomain: 'todoist-testproject.firebaseapp.com',
  databaseURL: 'https://todoist-testproject.firebaseio.com',
  projectId: 'todoist-testproject',
  storageBucket: 'todoist-testproject.appspot.com',
  messagingSenderId: '892547432031',
  appId: '1:892547432031:web:bd287ca7a1aead057a25ea'
}

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore()
