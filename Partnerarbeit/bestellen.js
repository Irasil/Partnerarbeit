window.onload = function hey(){
    var queryString = window.location.search

    if(queryString != ""){
    const urlParams = new URLSearchParams(queryString);
    const dienstleistung = urlParams.get("dienstleistung")
    document.getElementById("dienstleistung").value = dienstleistung;
    console.log("dienstleistung")
    }else{
        document.getElementById("dienstleistung").value = "Kleiner Service"
    }
    const hello = 2;
    const name = document.getElementById('name');
    const vorname = document.getElementById('vorname');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const prio = document.getElementById('prio');
    const dienstleistung = document.getElementById('dienstleistung');
    let startdatum = new Date();
    let enddatum = new Date()
    let container = [name.value, vorname.value, email.value, tel.value]
    let feedbacks_label = ["name_feedback", "vorname_feedback", "email_feedback", "tel_feedback"]
    let feedbacktexte = ["Bitte geben Sie einen gültigen Namen ein.", "Bitte geben Sie einen gültigen Vornamen ein.", "Bitte geben Sie eine gültige Emailadresse an.", "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen, keine Leerzeichen)"]
    
    //Funktionen ---------------------------------------------------------
    // Zählt days zu datum_before 
    addDays = function (datum_before, days) {
        enddatum.setDate(datum_before.getDate() + days);
    }

    // Überprüft ob die Feldern name, vorname, email und tel ausgefüllt sind. Wenn ja wird der Bestell-Button enabled
    checkAllFieldsFilled = function () {
        container = [name.value, vorname.value, email.value, tel.value, prio.value]
        if (container[0].length > 0 && container[1].length > 0 && container[2].length > 0 && container[3].length > 0 && container[4].length > 0) {
            document.getElementById("btn-bestellen").disabled = false;
        } else {
            document.getElementById("btn-bestellen").disabled = true;
        }
    }

    // Checkt ob Sonderzeichen vorhanden
    function containsNoSpecialChars(str) {
        const specialChars = /[`1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return !specialChars.test(str);
    }  
    
    // Berechnung des Abholdatums anhand von prio --------------------------------
    prio.onchange = function () {
        if (prio.value == "Tief") {
            addDays(startdatum, 12)          
        } else if (prio.value == "Standart") {
            addDays(startdatum, 7)       
        } else {
            addDays(startdatum, 5)     
        }
    }

    // Klick auf Bestell-Button -----------------------------------------------------
    document.getElementById("btn-bestellen").onclick = function varInURL() {
        var feedbacks = [true,true,true,true]
        for (let i = 0; i < container.length; i = i + 1) {
            if (i < 2) {
                feedbacks[i] = (containsNoSpecialChars(container[i]))
                //&& container[i].indexOf(' ') == 0
            }
            if (i == 2) {
                feedbacks[i] = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
            }

            if (i == 3) {
                feedbacks[i] = /^[0-9]+$/.test(tel.value)
            }
            
        }

       for (let i = 0; i < feedbacks.length; i = i + 1) {
            if (feedbacks[i] == false) {
                document.getElementById(feedbacks_label[i]).innerHTML = feedbacktexte[i]
                document.getElementById("btn-bestellen").disabled = true;
            } else {
                document.getElementById(feedbacks_label[i]).innerHTML = " "      
            }
        }

        var filter = 0
        for (let i = 0; i < feedbacks.length; i = i + 1){
            filter = filter + feedbacks[i]
        }

        if (filter == 4) {
            startdatum = startdatum.toDateString();
            enddatum = enddatum.toDateString();
            window.location = `bestaetigen.html?name=${name.value}&vorname=${vorname.value}&email=${email.value}&tel=${tel.value}&prio=${prio.value}&dienstleistung=${dienstleistung.value}&startdatum=${startdatum}&enddatum=${enddatum}`;
        }
    }


    
}
        


    



 
