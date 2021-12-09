// function chuyendoi() {
//     let sotien = Number(document.getElementById("sotien").value);
//     let ketqua = sotien/23000;
//     document.write('Result :' + ketqua)
// }
function display() {
    let input = document.getElementById("amount").value;
    let fromt = document.getElementById("formcurrency").value;
    let to = document.getElementById("tocurrency").value;
    if (fromt === "vnd" && to === "usd") {
        let result = input / 23000;
        document.getElementById("result").innerHTML = "Result =" + result + "USD";
    } else if (fromt === "usd" && to === "vnd") {
        let result = input * 23000;
        document.getElementById("result").innerHTML = "result =" + result + "VND"
    } else if (fromt === "usd" && to === "usd") {
        document.getElementById("result").innerHTML = "result =" + input + "USD"
    } else {
        document.getElementById("result").innerHTML = "result =" + input + "VND"
    }
}