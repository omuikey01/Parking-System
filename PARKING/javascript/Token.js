document.getElementById("tnum").addEventListener("blur", VWith)

function VWith() {
    async function dataWith() {
        let TOKENNumber = document.getElementById("tnum").value;
        let url = `http://localhost:3000/PARK?tnum=${TOKENNumber}`;
        let myObj = await fetch(url);
        let myData = await myObj.json();
        let myTab = `
        <table border="2">
            <tr>
                <th> Full Name </th>
                <th> Age </th>
                <th> Contact </th>
                <th> Email </th>
                <th> Vehicle Number </th>
                <th> Vehicle Name </th>
                <th>  </th>
            </tr>
        `;
        let count = 0;
        myData.map((keys) => {
            myTab += `
                <tr>
                    <td> ${keys.name} </td>
                    <td> ${keys.age} </td>
                    <td> ${keys.phone} </td>
                    <td> ${keys.email} </td>
                    <td> ${keys.number} </td>
                    <td> ${keys.vname} </td>
                    <td> 
                        <a href="#" onclick=callmeDelete(${keys.id})> Withdrwal</a>
                    </td>
                    ${count++}
                </tr>
            `;

        })
        if (count == 0) {
            myTab += `
                <tr>
                    <td colspan='7'> Data Not Found!! </td>
                </tr>
            `;
        }
        myTab += "</table>";
        document.getElementById("showtokenNum").innerHTML = myTab;

    }
    dataWith();
}

function callmeDelete(id) {
    let idd = id;
    let url = `http://localhost:3000/PARK/${idd}`;
    let cc = prompt("Are you sure YES/NO");
    if (cc == "YES" || cc == "yes" || cc == "YES" || cc == "Yes" || cc == "Y" || cc == "y") {
        fetch(url,
            { method: "DELETE" }).then(response => {
                alert("Vehicle Withdrwal SuccessFully");
            });
    }
    else
        alert("Vehicle Not Withdrwal!!")
}