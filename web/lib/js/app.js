// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyASEBZh2lGKNZhavXfeL1YNGLpf45fLiTw",
    authDomain: "proyectapp-6e2f0.firebaseapp.com",
    projectId: "proyectapp-6e2f0"
  });
  
 
  var db = firebase.firestore();
function add(){
    
    var titulo=     document.getElementById('titulo').value;
    var area=       document.getElementById('area').value;
    var responsable=document.getElementById('responsable').value;
    var proyecto=   document.getElementById('Proyecto').value;
    var descripcion=document.getElementById('Descripcion').value;
    var fecha=      document.getElementById('fecLimite').value;

    db.collection("ToDo").add({

        titulo: titulo,
        area: area,
        responsable_id: responsable,
        proyecto_id: proyecto,
        descripcion: descripcion,
        fecha: fecha,
        estatus:1,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


var tabla=document.getElementById('tabla');

db.collection("ToDo").onSnapshot((querySnapshot) => {//get()
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
       console.log(`${doc.id} => ${doc.data().titulo}`);
        tabla.innerHTML+=`
        <tr>
        <td>${doc.data().titulo}</td>
        <td>${doc.data().area}</td>
        <td>${doc.data().responsable_id}</td>
        <td>${doc.data().proyecto_id}</td>
        <td>${doc.data().fecha}</td>
        <td>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
         <i class="material-icons right">send</i>
         </button>
        </td>
        <td>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
             <i class="material-icons right">send</i>
            </button>
        </td>
    </tr>
        `

    });
});
