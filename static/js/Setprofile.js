const Setdashboard=async()=>{
    const res=await fetch('api/Setdashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                phone:document.getElementById("tel").value,
                pic:"Not Found"
                })
                });
                const data = await res.json();
                console.log(data);
                if(data.response){alert("Data saved !");}
                else{alert("Something went wrong !");}
    
    }
    
    