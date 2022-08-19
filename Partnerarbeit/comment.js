window.onload = function(){

    


    document.getElementById("formkontakt").onsubmit = function (e) {
        e.preventDefault()
        
        document.getElementById("mitteilung").innerHTML = `<input class="form-control" style="width:100%" value="Ihre Mitteilung wurde erfolgreich übermittelt."type="text">`

        const post = {
            email : document.getElementById("email1").value,            
            mitteilung : document.getElementById("mitteilung1").value
                    };

                    console.log(post.email)
                    

        if(post.email == "" || post.mitteilung == ""){
            alert("Eingabe ist ungültig");
            return true;
        }
        
        
            fetch("http://localhost:5000/api/registration",{
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name: null,
                    email: post.email,
                    priority: null,           
                    service:null,
                    create_date:post.mitteilung,
                    startdatum:null,
                    enddatum:null
                })
 })
        .then((response)=>response.json())
            .then((json)=>finish(json))
            .catch((error)=>{
                //alert("Leider gab es einen Fehler, bitte versuchen Sie es noch einmal");
                document.getElementById("email1").value =    ""        
                document.getElementById("mitteilung1").value = ""
                return false;
            }
            );
            return true;
            
            function finish()
        {
            console.log("Hallo")
            document.getElementById("email1").value =    ""        
            document.getElementById("mitteilung1").value = ""
            return true;
        }

    }


}