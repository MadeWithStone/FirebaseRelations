// Import firebase for your JS platform (NodeJS, React, etc)

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
})

var db = firebase.firestore()

const getDocWithRelations = () => {
  
