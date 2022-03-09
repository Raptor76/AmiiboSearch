async function search() {
    const input = document.getElementById("search").value;
    const api = `https://www.amiiboapi.com/api/amiibo/?character=${input}`;

    const tableau = document.getElementById("tableau");
    const tbody = tableau.querySelector('tbody');

    zero(tableau, tbody);

    let response = await fetch(api);
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.amiibo.length; i++) {
        const ligne = tbody.insertRow();

        let txtCell = ligne.insertCell();
        txtCell.innerHTML = data.amiibo[i].name;

        let imgCell = ligne.insertCell();
        imgCell.innerHTML = "<img src=" + data.amiibo[i].image + " />"
    }
}



function zero(a, b) {
    const tr = a.querySelectorAll('tr');

    for (let i = 0; i < tr.length; i++) {
        b.deleteRow(0);

    }
}
