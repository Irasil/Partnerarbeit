window.onload = function(){

    


    document.getElementById("formkontakt").onsubmit = function () {
      

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
                    mitteilung:post.mitteilung
                })
 })
        .then((response)=>response.json())
            .then((json)=>finish(json))
            .catch(()=>{
                //alert("Leider gab es einen Fehler, bitte versuchen Sie es noch einmal");
                return false;
            }
            );
            return true;
            
            function finish()
        {
            console.log("Hallo")
            return true;
        }

    }


}