function verifTxt(ch)
{
    ch=ch.toUpperCase();
    i=0;
    test=true;
    while( (i<ch.length) && (test==true) )
    {
        if(((ch.charAt(i)<"A") || (ch.charAt(i)>"Z")) && (ch.charAt(i)!=" "))
        {
            test=false;
        }

    }

    return(test);
}

function verif()
{
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;

    if((verifTxt(nom)==false) ||(verifTxt(prenom)==false) )
    {   
        alert("verifier votre nom ou prenom");
    }
    else if((document.getElementById("homme").checked==false)&&(document.getElementById("femme").checked==false))
            {
                alert("veuillez choisir un sexe");
            }
   
}