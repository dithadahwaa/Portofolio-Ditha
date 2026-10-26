const nameElement = document.getElementById("typed-name");
const fullName = "Ditha Dahwaniah";

let index = 0;

function typeName() {
    if (index < fullName.length) {
        nameElement.textContent += fullName.charAt(index);
        index++;

        setTimeout(typeName, 120);
    }
}

typeName();