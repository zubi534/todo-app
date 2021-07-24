

var a = document.getElementById('todoList1')
var inp = document.getElementById('input1')

function input1() {
    var newElement = document.createElement("LI")
    var text = document.createTextNode(inp.value)
    newElement.appendChild(text)
    a.appendChild(newElement)

    var edit = document.createElement("BUTTON")
    var edit_text = "Edit"
    // var edittext = document.createTextNode("edit")
    edit_text = document.createTextNode(edit_text)
    edit.appendChild(edit_text)
    edit.setAttribute('onclick','editTodo(this)')
    edit.setAttribute('class','edit')
    // b.value = ""
    newElement.appendChild(edit)

    var deltbtn = document.createElement('BUTTON')
    var deltbtntext = document.createTextNode('delete')
    deltbtn.appendChild(deltbtntext)
    deltbtn.setAttribute('onclick','deleteTodo(this)')
    deltbtn.setAttribute('class','deletebtn')
    newElement.appendChild(deltbtn)
    

}

function deleteTodo(e){
    console.log(e.parentNode)
    e.parentNode.remove()
}

function editTodo(e){
    console.log(e.parentNode.firstChild)
    
    e.parentNode.firstChild.nodeValue = prompt("Enter new Value",e.parentNode.firstChild.nodeValue)
}
function clearall() {
    a.innerHTML = ''
}



