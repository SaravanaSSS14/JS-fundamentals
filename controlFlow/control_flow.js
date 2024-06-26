let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access!";
} else if (userRole === "manager"){
    accessLevel = "Limited access";
} else {
    accessLevel = "No access";
}

console.log("Access Level" , accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome admin!";
    }else{
        userMessage = "Welcome User!";
    }
}else{
    userMessage = "Please login to access the system.";
}

console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuth = true;

let authStatus = isAuth ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authStatus);