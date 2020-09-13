console.log("code--------------");
function add(num1, num2) {
    return num1 + num2;
}
var num1 = 5;
var num2 = 3.7;
var Role;
(function (Role) {
    Role[Role["ADIM"] = 0] = "ADIM";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(add(num1, num2));
