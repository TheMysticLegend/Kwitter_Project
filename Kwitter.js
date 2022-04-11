
//Take the username from the input box, 
//store it in localStorage and then redirect it to kwitter_room.html page.

function addUser()
{
   username = document.getElementById("username").value;
   localStorage.setItem("username");
   window.location(kwitter_room.html);
}