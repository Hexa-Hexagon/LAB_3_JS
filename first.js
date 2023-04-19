function plus() {
    const element1 = document.getElementById("inp1").value;
    const element2 = document.getElementById("inp2").value;
    document.getElementById("res").textContent = Number(element1) + Number(element2)
}

function minus() {
    const element1 = document.getElementById("inp1").value;
    const element2 = document.getElementById("inp2").value;
    document.getElementById("res").textContent = Number(element1) - Number(element2)
}