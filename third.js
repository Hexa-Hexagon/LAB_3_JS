function btnClick() {
    let text = document.getElementById("inp2").value;
    document.getElementById("inp2").value = document.getElementById("inp1").value;
    document.getElementById("inp1").value = text;
}