function submitFunction()
{
    var x=document.forms["Log_in"]["username"].value;
    var y=document.forms["Log_in"]["password"].value;

    if(x==null||x=""||y=null||y="")
    {
        alert("both fields can't be empty.");
    }
    else(
        if(x=="webi")
        {
            if(y="12345")
            {
                alert("login sucessful")
            }               
        }
        else{
            alert("Password do not match")
        }
    )
    else(
        alert("User doesn't exist")
    )


}