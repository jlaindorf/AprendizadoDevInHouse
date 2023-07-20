console.log("m1s07a1");

/*const lista= document.getElementById("lista")


const itens = document.getElementsByTagName("li")

const itensArray = [...itens]

itensArray.forEach((item) =>{
    console.log(item)
}   )
*/
const itens = document.querySelector("lista")
const li = document.createElement("li")
li.innerHTML = "item 5"
lista.appendChild(li)
lista.removeChild(itens[1])