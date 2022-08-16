

window.onload = function(){
    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name")
    const email = urlParams.get("email")
    const tel = urlParams.get("tel")
    const prio = urlParams.get("prio")
    const dienstleistung = urlParams.get("dienstleistung")

    
    var result = "<h1>Bitte prüfen Sie Ihr Angaben</h1>";
    result += "<br>";
    result += `<strong>Name: &emsp;&emsp; &emsp;&emsp;&emsp;${name}`;
    result += "<br>";
    result += `<strong>E-Mail:&emsp;&emsp;&emsp;&emsp;&emsp;${email}`;
    result += "<br>";        
    result += `<strong>Telnr.:&emsp;&emsp;&emsp;&emsp;&emsp;${tel}`;
    result += "<br>";           
    result += `<strong>Priorität:&emsp;&emsp;&emsp;&emsp;${prio}`;  
    result += "<br>";                   
    result += `<strong>Dienstleistung:&emsp;${dienstleistung}`; 

    document.getElementById("best").innerHTML = result;
   
    console.log(name)
    console.log(email)
}