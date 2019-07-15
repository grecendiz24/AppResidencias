

  function validar(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;


    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });

  }