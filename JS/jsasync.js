function waitfortwosec()
{
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}

function register(){
    waitfortwosec();
    console.log("register end");
} 


function sendEmail(){
    waitfortwosec();
    console.log("email");
}

function getdata(){
    waitfortwosec();
    console.log("Data received");
}
register();
sendEmail();
getdata();
console.log("Other Application")


//Asynchronous
//Callback hell

function regist(Cb){
    setTimeout(()=>{
        console.log("Register end");
        Cb();
    },2000)
}

regist(()=>{
    sendEmail(()=>{
        login(()=>{
            getdata()
        })
    })
})