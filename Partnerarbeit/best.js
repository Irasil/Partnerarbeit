

window.onload = function(){
    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name")
    const email = urlParams.get("email")
    const tel = urlParams.get("tel")
    const prio = urlParams.get("prio")
    const dienstleistung = urlParams.get("dienstleistung")

    
   /* var result = "<h1>Bitte prüfen Sie Ihre Angaben</h1>";
    result += "<br>";
    result += `Name:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp<strong>${name}</strong>`;
    result += "<br>";
    result += `E-Mail:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>${email}</strong>`;
    result += "<br>";        
    result += `Telnr.:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp&nbsp<strong>${tel}</strong>`;
    result += "<br>";           
    result += `Priorität:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<strong>${prio}</strong>`;  
    result += "<br>";                   
    result += `Dienstleistung:&emsp;&emsp;&emsp;&nbsp<strong>${dienstleistung}</strong>`; */



    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("tel").innerHTML = tel;
    document.getElementById("prio").innerHTML = prio;
    document.getElementById("dienstleistung").innerHTML = dienstleistung;
   
    console.log(name)
    console.log(email)




}