const url ="https://dummyjson.com/users";
async function f1(){
    try{
        const res=await fetch(url)
    const jsondata=await res.json();
    jsondata.users.forEach((da)=>{
    console.log("name=",da.firstName);
    console.log("email=",da.email);
    console.log("ip=",da.ip);
    console.log("macAddress=",da.macAddress);

    })
}

catch(err){
    console.error("Error",err.message);
}

}

f1();