window.onload = function(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const prio = document.getElementById('prio');
    const dienstleistung = document.getElementById('dienstleistung');


    document.getElementById("btn-bestellen").onclick = function(e){
           e.preventDefault;
        console.log(name.value)
        console.log(email.value)
        console.log(tel.value)
        console.log(prio.value)
        console.log(dienstleistung.value)

        var result = "<h1>Bitte prüfen Sie Ihr Angaben</h1>";
        result += "<br>";
        result += `<strong>Name: &emsp;&emsp; &emsp;&emsp;&emsp;${name.value}`;
        result += "<br>";
        result += `<strong>E-Mail:&emsp;&emsp;&emsp;&emsp;&emsp;${email.value}`;
        result += "<br>";        
        result += `<strong>Telnr.:&emsp;&emsp;&emsp;&emsp;&emsp;${tel.value}`;
        result += "<br>";           
        result += `<strong>Priorität:&emsp;&emsp;&emsp;&emsp;${prio.value}`;  
        result += "<br>";                   
        result += `<strong>Dienstleistung:&emsp;${dienstleistung.value }`;               
        //window.document.getElementById('bestellen').innerHTML = result;

       // window.location = `bestaetigen.html?${name.value}|${email.value}`;
       window.location = `bestaetigen.html?name=${name.value}&email=${email.value}&tel=${tel.value}&prio=${prio.value}&dienstleistung=${dienstleistung.value}`;

        


      // bestaetigen(result);
}
}
        


/*function bestaetigen(resultat){

    sessionStorage.setItem("favoriteMovie", resultat);

    window.location = "bestaetigen.html"

    var favoritemovie = sessionStorage.getItem("favoriteMovie");
    //console.log(favoritemovie)} */



    



 
