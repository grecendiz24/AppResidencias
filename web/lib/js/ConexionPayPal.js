// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyASEBZh2lGKNZhavXfeL1YNGLpf45fLiTw",
    authDomain: "proyectapp-6e2f0.firebaseapp.com",
    projectId: "proyectapp-6e2f0"
  });
  
 
  var db = firebase.firestore();
function add(){
    
    var name=     document.getElementById('name').value;
    var apellidos=       document.getElementById('apellidos').value;
    var email=document.getElementById('email').value;

    db.collection("ClientesPago").add({

        name: name,
        apellidos: apellidos,
        email: email,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}



    // Add a new document in collection "cities"


