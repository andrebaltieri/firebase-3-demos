// Configuração inicial do Firebase
var config = {
    apiKey: "AIzaSyBpAGKn89wB9u4DpbWOZkfj_vlOydX1wE8",
    authDomain: "tdcsp2016.firebaseapp.com",
    databaseURL: "https://tdcsp2016.firebaseio.com",
    storageBucket: "tdcsp2016.appspot.com",
};
firebase.initializeApp(config);

// Obtendo os elementos
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// Ouvir o evento change
fileButton.addEventListener('change', function (e) {
    // Obter o arquivo
    var file = e.target.files[0];

    // Referenciar o Storage
    var storageRef = firebase.storage().ref('pics/' + file.name);

    // Enviar o arquivo
    var task = storageRef.put(file);

    // Atualizar o Progress Bar
    task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
            console.log(err);
        },
        function complete() {
            alert('Envio completo!')
        }
    )
});