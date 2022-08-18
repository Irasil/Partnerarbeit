window.onload = function (){
    var queryString = window.location.search

    if(queryString != ""){
    const urlParams = new URLSearchParams(queryString);
    const dienstleistung = urlParams.get("dienstleistung")
    document.getElementById("dienstleistung").value = dienstleistung;
    console.log("dienstleistung")
    }else{
        document.getElementById("dienstleistung").value = "Kleiner Service"
    }

}