const LogOut=async()=>{
    const response = await fetch('api/logout', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 })
                 });
                 const data = await response.json();
                 console.log(data);
                 if(data.message==true){window.location.href = "/login";}
                 else{alert("Something went wrong !");}
}
