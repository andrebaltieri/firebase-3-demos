// Configuração inicial do Firebase
var config = {
    apiKey: "AIzaSyBpAGKn89wB9u4DpbWOZkfj_vlOydX1wE8",
    authDomain: "tdcsp2016.firebaseapp.com",
    databaseURL: "https://tdcsp2016.firebaseio.com",
    storageBucket: "tdcsp2016.appspot.com",
};
firebase.initializeApp(config);

// Referências
var provider = new firebase.auth.GithubAuthProvider();
var authButton = document.getElementById('authButton');
var displayName = document.getElementById('displayName');

// Ao clicar no botão, autentica
authButton.addEventListener('click', function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
            authButton.disabled = true;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
});