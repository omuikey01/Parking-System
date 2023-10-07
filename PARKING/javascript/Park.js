document.getElementById("resubbtn").addEventListener("click", myFormSub)
function myFormSub() {
    let parName = document.getElementById("name").value;
    let parAge = document.getElementById("age").value;
    let parPhone = document.getElementById("phone").value
    let parEmaill = document.getElementById("eml").value;
    let parNumber = document.getElementById("num").value
    let parVehicleName = document.getElementById("vname").value
    let TokenNum = Math.floor(Math.random()*10000);
    // alert(TokenNum)

    let url = "http://localhost:3000/PARK";

    fetch(url,
        {
            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                name: parName,
                age: parAge,
                phone: parPhone,
                email: parEmaill,
                number: parNumber,
                vname: parVehicleName,
                tnum : TokenNum
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

    ).then((key) => key.json()).then(() => {
        alert("Data Saved!!");
    });
    
    alert("You Token Number " + TokenNum);
}


    // parName = document.getElementById("name").value="";
    // parAge = document.getElementById("age").value="";
    // parPhone = document.getElementById("phone").value="";
    // parEmaill = document.getElementById("eml").value="";
    // parNumber = document.getElementById("num").value="";
    // parVehicleName = document.getElementById("vname").value="";

    // document.getElementById("tt").innerHTML = `<h1> you are token number is ${TokenNum} </h1> `;