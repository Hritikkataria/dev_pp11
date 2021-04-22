function getFirstName(fullName){
    // fullName = "STEVE ROGERS" => string
    fullName = fullName.split(" ");
    // ["STEEVE","ROGERS"];
    return fullName[0];
}
function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}

function fun(fullName , cb){
    let name = cb(fullName);
    console.log(name);
}

fun("Steve Rogers", getFirstName);
fun("Iron Man" , getLastName);