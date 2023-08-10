const submit = document.getElementById('submit');
const username = document.getElementById('Username');
const password = document.getElementById('Password');

async function sendData() {
   const response = await fetch('api/login', {
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
            if(data.message){
                window.location.href = "/";
            }
            else{
                alert("Wrong username or password !");
            }
            console.log(data);
            

}
