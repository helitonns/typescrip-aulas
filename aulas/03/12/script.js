window.UserData = {};
function isUserData(obj) {
    if (obj && typeof obj === "object" && ("nome" in obj || "email" in obj || "cpf" in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    var localUserData = localStorage.getItem("UserData");
    if (localUserData && validJSON(localUserData)) {
        var UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
function handleInput(_a) {
    var target = _a.target;
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
var form = document.querySelector("#form");
form === null || form === void 0 ? void 0 : form.addEventListener("keyup", handleInput);
