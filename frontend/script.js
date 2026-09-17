const API_URL = "http://localhost:5242/api/eszkozok"

const eszkozokLekerdezese = () => {

fetch(API_URL)
    .then(respone => respone.json())
    .then(data => {

        const tabla = document.querySelector('#eszkozTable')
        tabla.innerHTML = ''
        data.forEach(eszkoz => {
            
            tabla.innerHTML += `
                <tr>
                    <td>${eszkoz.id}</td>
                    <td>${eszkoz.nev}</td>
                    <td>${eszkoz.leltariSzam}</td>
                    <td>${eszkoz.kategoria}</td>
                    <td>${eszkoz.gyarto}</td>
                    <td>${eszkoz.modell}</td>
                    <td>${eszkoz.terem}</td>
                    <td>${eszkoz.allapot}</td>  
                    <td>${eszkoz.hasznalatbanVan}</td>     
                    <td>${eszkoz.kolcsonozheto}</td>     
                    <td>${eszkoz.beszerzesiAr}</td>     
                    <td>${eszkoz.beszerzesDatuma}</td>                       
                </tr>

            `

        });

    })
    .catch(error => {

        console.log(error)

        document.getElementById("uzenet").innerHTML =
            '<div class="alert alert-danger">Nem sikerült csatlakozni</div>'

    })


}
// addEventListener segítségével figyelünk egy felhasználói eseményt.
// Hogyha bekövetkezik ez az esemény (kattintás), akkor 
// utána meghiv egy függvényt az addEvenetListener -> eszkozokLekerdezese

document.getElementById("lekerdezesGomb")
    .addEventListener("click", eszkozokLekerdezese)