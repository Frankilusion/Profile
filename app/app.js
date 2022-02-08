
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAzoRukbqMor4p0zJ3BW2e7hz8jruup60o",
    authDomain: "formulario-contacto-3239b.firebaseapp.com",
    projectId: "formulario-contacto-3239b",
    storageBucket: "formulario-contacto-3239b.appspot.com",
    messagingSenderId: "509855957938",
    appId: "1:509855957938:web:cec5be9fa7f787852a5aab"
  };

  const app = initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  const db = firestore.collection("datos");

  let submitbutton = document.getElementById('submit');

  submitbutton.addEventListener("click",(e)=>{
      e.preventDefault()

      let nombre = document.getElementById('nombre').value
      let apellido = document.getElementById('apellido').value
      let email = document.getElementById('email').value
      let telefono = document.getElementById('telefono').value
      let mensaje = document.getElementById('mensaje').value

  db.doc().set({
      nombre:nombre,
      apellido:apellido,
      email:email,
      telefono:telefono,
      mensaje:mensaje
  }).then( () => {
      console.log("data saved")
  }).catch( (error) => {
      console.log(error)
  })

})