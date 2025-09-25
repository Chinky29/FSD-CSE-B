///
const url ="https://dummyjson.com/users";
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
})
.then((data)=>{

    // console.log("name=",data.users[0].firstName);
    // console.log("email=",data.users[0].email);
    // console.log("ip=",data.users[0].ip);
    // console.log("macAddress=",data.users[0].macAddress);
    data.users.forEach((da)=>{
        
    console.log("name=",da.firstName);
    console.log("email=",da.email);
    console.log("ip=",da.ip);
    console.log("macAddress=",da.macAddress);

    })
})
.catch((err)=>{
    console.error("Error",err.message);
})