var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

var newLi = document.createElement("li")
newLi.textContent = "flashlight"
var stronglist = document.getElementById("strong-list")
stronglist.append(newLi)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)
newP.style.fontSize = "20px"