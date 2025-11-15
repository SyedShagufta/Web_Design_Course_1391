function callBack()
{
    console.log("First customer");
}

function callBack1()
{
    console.log("SECOND CUSTOMER")
}

setTimeout(callBack, 5000);
setTimeout(callBack1, 1000);
setInterval(callBack, 1000);