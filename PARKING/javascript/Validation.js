document.getElementById("45tggtr").addEventListener("click", validationForm)

var iuu = 0, count = 0, at = 0, dot = 0, uni;
// ERROE Assec Code
let nameErrorS, ageError, vehinumErrorE, emailError, phoneError, genError;
nameErrorS = document.getElementById("nameError");
ageError = document.getElementById("ageError");
phoneError = document.getElementById("phoneError");
emailError = document.getElementById("emailError");
vehinumErrorE = document.getElementById("vehinumError");




// Error Show Function
function erroeFun(errid, validd) {
    document.getElementById(`${validd}`).value = "";
    document.getElementById(`${validd}`).focus();
    document.getElementById(`${errid}`).style.backgroundColor = "white";
    document.getElementById(`${errid}`).style.color = "red";
    document.getElementById(`${errid}`).style.padding = "5px 10px";
}

function validationForm() {

    let nameu, age, vehicleNum, emailId, PhoneNum;
    nameu = document.getElementById("name").value;
    age = document.getElementById("age").value;
    PhoneNum = document.getElementById("phone").value;
    emailId = document.getElementById("eml").value;
    vehicleNum = document.getElementById("num").value;
    


    let namecount = nameVali();
    let agecount = ageVali();
    let phonecount = phoneVali();
    let emailcount = emailVali();
    let Vehecount = VehinumVali();

    if (namecount == 1 && agecount == 1 && phonecount == 1 && emailcount == 1 && Vehecount == 1) {
        myFormSub();
    }
}
// Name Validation
function nameVali() {
    if(nameu == "")
    {
        nameErrorS.innerHTML = "Name can not containe Digit or Symbols !!";
        erroeFun("nameError", "name");
        return 0;
    }
    for (i = 0; i < nameu.length; i++) {
        if (nameu[i] >= 'a' && nameu[i] <= 'z' || nameu[i] >= 'A' && nameu[i] <= 'Z')
            count++;
    }
    if (count != nameu.length) {
        nameErrorS.innerHTML = "Name can not containe Digit or Symbols !!";
        erroeFun("nameError", "name");
        return 0;
    }
    else
        return 1;
}

// Age validation
function ageVali() {
    // console.log(age, typeof (age))
    age = parseInt(age)
    // console.log(age, typeof (age))
    if (age > 0 && age < 100) {
        return 1;
    }
    else {
        ageError.innerHTML = "Invalid Age Now !!";
        erroeFun("ageError", "age");
        return 0;
    }
}


// Vehicle Number Validatiuon
function VehinumVali() {
    if (vehicleNum.length <= 10) {
        vehinumErrorE.innerHTML = "Provide Vehicle number Proper !!";
        erroeFun("vehinumError", "num");
        return 0;
    }
    else
        return 1;
}


// Email Validation
function emailVali() {
    for (i = 0; i < emailId.length; i++) {
        if (emailId[i] == '@')
            at = i;
        if (emailId[i] == '.')
            dot = i;
    }
    if (emailId.length < 11 || dot - at != 6) {
        emailError.innerHTML = "Provide Currect email Id !!";
        erroeFun("emailError", "eml");
        return 0;
    }
    else
        return 1;
}


// Phone Validation
function phoneVali() {
    if (PhoneNum.length != 10) {
        phoneError.innerHTML = "Provide Currect Contact Number!!";
        erroeFun("phoneError", "phone");
        return 0;
    }
    else
        return 1;
}
