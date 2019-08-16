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



function deletes(id){
    db.collection("ToDo").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
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
        <a class="waves-effect waves-light btn-small" onclick="deletes('${doc.id}')";'>Eliminar</a>
        </td>
        <td>
        <a class="waves-effect waves-light btn-small" onclick="updates('${doc.id}','${doc.data().titulo}','${doc.data().area}','${doc.data().responsable_id}','${doc.data().proyecto_id}','${doc.data().descripcion}','${doc.data().fecha}')";'>Modificar</a>
        </td>
    </tr>
        `

    });
});



function updates(id,titulo,area,responsable,proyecto,des,fecha){


    document.getElementById('titulo').onfocus;
    document.getElementById('area').onfocus
    document.getElementById('responsable').onfocus;
    document.getElementById('Proyecto').onfocus;
    document.getElementById('Descripcion').onfocus;
    document.getElementById('fecLimite').onfocus;

    document.getElementById('titulo').value=titulo;
    document.getElementById('area').value=area;
    document.getElementById('responsable').value=responsable;
    document.getElementById('Proyecto').value=proyecto;
    document.getElementById('Descripcion').value=des;
    document.getElementById('fecLimite').value=fecha;

    var btn=document.getElementById('bot');
    btn.innerHTML='Editar';






    
    btn.onclick=function(){


        var titulo=     document.getElementById('titulo').value;
        var area=       document.getElementById('area').value;
        var responsable=document.getElementById('responsable').value;
        var proyecto=   document.getElementById('Proyecto').value;
        var descripcion=document.getElementById('Descripcion').value;
        var fecha=      document.getElementById('fecLimite').value;

        

        db.collection("ToDo").doc(id).set({
            titulo: titulo,
            area: area,
            responsable_id: responsable,
            proyecto_id: proyecto,
            descripcion: descripcion,
            fecha: fecha,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    }


}

    // Add a new document in collection "cities"
function addEmpleado(){
    
    var nombre=     document.getElementById('nombre').value;
    var apellidos=       document.getElementById('apellidos').value;
    var area=document.getElementById('area').value;
    db.collection("Empleados").add({

        nombre: nombre,
        apellidos: apellidos,
        area: area,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}