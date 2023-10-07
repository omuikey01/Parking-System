allDisplay();
async function allDisplay()
{
    // alert("Heyy Beb!!!")
    let url = `http://localhost:3000/PARK`;
    let myObj = await fetch(url);
    let myData = await myObj.json();
    let myTab = `
        <table border='2' >
            <tr>
                <th> Full Name </th>
                <th> Age </th>
                <th> Contact Number </th>
                <th> Email</th>
                <th> Vehicle Number </th>
                <th> Vehicle Name </th>
            </tr>
    `;
    myData.map((key)=>{
        myTab += `
            <tr>
            <td> ${key.name} </td>
            <td> ${key.age} </td>
            <td> ${key.phone} </td>
            <td> ${key.email} </td>
            <td> ${key.number} </td>
            <td> ${key.vname} </td>
            </tr>
        `;
    })
    myTab += "</table>";
    document.getElementById("allshow").innerHTML = myTab;
}