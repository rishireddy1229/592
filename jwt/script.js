
async function login(){
    let process = await fetch('http://localhost:3000/login',{
    method:"POST",
    body:JSON.stringify({
        uname:document.getElementById('username').value,
        pwd:document.getElementById('password').value,
        // uname,
        // pwd,
    }),
    headers:{
        "Content-Type":"application/json"
    }
});
    let response= await process.json();
    //console.log(response)
    console.log(response.token)
    localStorage.setItem("token",response.token)
}

async function profile(){
    let profile1 = await fetch('http://localhost:3000/profile',{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "authorization": "Bearer "+localStorage.getItem("token")
        }
    });
    let response=await profile1.json();
    console.log(response);
    
}