//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCC9C_zfI3ko5M7CxnaVAnNPKtYDa2Rssw",
    authDomain: "kwitter-83caf.firebaseapp.com",
    databaseURL: "https://kwitter-83caf-default-rtdb.firebaseio.com",
    projectId: "kwitter-83caf",
    storageBucket: "kwitter-83caf.appspot.com",
    messagingSenderId: "289545903114",
    appId: "1:289545903114:web:744a1d8ba262a74b5a13f3",
    measurementId: "G-13DQMYDK74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome: " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}



function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page copy.html";
}

function logOut() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}