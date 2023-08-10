const submit = document.getElementById('submit');
const username = document.getElementById('Username');
const password = document.getElementById('Password');

async function sendData() {
   const response = await fetch('api/register', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            username: username.value,
            password: password.value
            })
            });
            const data = await response.json();
            console.log(data);
            if(data.message==false){alert("Username already exists !")}
            else{alert("You have successfully registered !");}
            

}
