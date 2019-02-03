var modal = document.getElementById("myModal");

var contact = document.getElementById("contactLink");

var exit = document.getElementById("exitButton");

// when I click conact, change style of modal

contact.onclick = function()    {
    modal.style.display = "block";
};  

exitArea.onclick = function ()  {
    modal.style.display = "none";
}

