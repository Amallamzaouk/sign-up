 
 function verifier(){
 //nome
    var X = document.getElementById("a").value;
    errornom=document.getElementById("ernom");
    if (X.length<1){
        errornom.innerText="invalid";
        errornom.style.color = "red";

       } else{
        errornom.innerText="valid";
        errornom.style.color = "green";
        }
    

   //prenome
   var l = document.getElementById("b").value;
   error = document .getElementById("error");
    if  (l.length<1){
    error.innerText="invalid";
    error.style.color = "red";
    }else{
        error.innerText="valid";
        error.style.color = "green";

    }

 //age
    dn=document.getElementById("dn").value;
    errorage = document .getElementById("errorage");
    dif=new Date().getFullYear()- new Date(dn).getFullYear();
    if(dif<18 || dn==""){
    errorage.innerText="invalid";
    errorage.style.color = "red";
   } else{
    errorage.innerText="valid";
    errorage.style.color = "green";
}
 //code postal
    var regcp = new RegExp('^[0-9]{5}$','i');
    cop=document.getElementById("cp").value;
    pc=document .getElementById("pc");
    regcp  = regcp.test(cop);
    if(!regcp){
        pc.innerText="invalid";
        pc.style.color = "red";
    }else{
        pc.innerText="valid";
        pc.style.color = "green";
    }
   //numero de telephone
    //email
     //password
     //verification password

}
