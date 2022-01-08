
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA9CsaAAF5iRP3FDRHV8pDUwfdsoeO-QXc",
      authDomain: "kwitter-5385d.firebaseapp.com",
      databaseURL: "https://kwitter-5385d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5385d",
      storageBucket: "kwitter-5385d.appspot.com",
      messagingSenderId: "495517623972",
      appId: "1:495517623972:web:262db1f863431c7622a831"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
