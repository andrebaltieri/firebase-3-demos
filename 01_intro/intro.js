// Configuração inicial do Firebase
var config = {
    apiKey: "AIzaSyBpAGKn89wB9u4DpbWOZkfj_vlOydX1wE8",
    authDomain: "tdcsp2016.firebaseapp.com",
    databaseURL: "https://tdcsp2016.firebaseio.com",
    storageBucket: "tdcsp2016.appspot.com",
};
firebase.initializeApp(config);

// Referências
var message = document.getElementById('message');
var dbRef = firebase.database().ref().child('message');

// Ouve o evento
dbRef.on('value', snap => message.innerHTML = snap.val());