function addItem() {
    let list = document.getElementById("item-list");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}

function removeItem() {
    let list = document.getElementById("item-list");
    if (list.childElementCount > 0) {
        list.removeChild(list.lastElementChild);
    }
}
