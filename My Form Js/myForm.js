// let empt = document.querySelectorAll(".space");
let btnn = document.querySelector(".btn");

// function check() {
//     for (let i = 0; i < empt.length; i++) {
//         if (empt[i].value === "") {
//             alert("Please Enter Details");
//             return;
//         }
//     }
// }
// btnn.addEventListener("click", check);

// let inddx = document.querySelectorAll(".indx");

// function indxxx() {
//     for (let i = 0; i < inddx.length; i++) {

//         if (inddx[i].selectedIndex === 0) {
//             alert("Please Select Any one");
//             return;
//         }
//     }
// }
// btnn.addEventListener("click", indxxx);

// let rado = document.getElementsByName(".redo");

// function rdocheck() {
//     for (let i = 0; i < rado.length; i++) {
//         if (rado[i].checked === 0) {

//             alert("Please Fill Terms & Condition");
//             return;
//         }
//     }

// }
// btnn.addEventListener("click", rdocheck);

// let zip = document.querySelector(".ziip").value.length;


// function zipchecke() {
//     console.log(zip);
//     if (zip > 6) {
//         alert("Please enter 5 -digits zipcode.");

//     }
// }
// btnn.addEventListener("click", zipchecke);
// console.log(zipchecke());


btnn.addEventListener("click", function allchek() {
    let empt = document.querySelectorAll(".space");
    for (let i = 0; i < empt.length; i++) {
        if (empt[i].value === "") {
            alert("Please Enter Details");
            return;
        }
    }
    let zip = document.querySelector(".ziip").value;
    if (zip.length < 6) {
        alert("Please enter 5 -digits zipcode.");
        return;
    }
    let inddx = document.querySelectorAll(".indx");
    for (let i = 0; i < inddx.length; i++) {
        if (inddx[i].selectedIndex === 0) {
            alert("Please Select Any one");
            return;
        }
    }
    let rado = document.getElementsByName(".redo");
    for (let i = 0; i < rado.length; i++) {
        if (rado[i].checked === 0) {
            alert("Please Fill Terms & Condition");
            return;
        }
    }
    let getstr = document.querySelector(".cty");
    if (zip === "201308") {
        getstr.value = "Greater Noida";
        return;
    }

});