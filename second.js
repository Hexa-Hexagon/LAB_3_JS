function btnClick() {
    let text1 = "";
    let text2 = "";
    text1 = document.form.btn.value;
    text2 = document.form.btn.name;
    document.getElementById("ex1").innerHTML = "<hr>" + "Ви натиснули кнопку:" + text1.bold() + " з ім'ям: " + text2.bold() + "</hr>";
}