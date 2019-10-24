function isAuthenticated() {
    var data = getAuthentication();
    return data && data.authenticated;
}

function setAuthentication(data) {
    localStorage.setItem("auth", JSON.stringify(data));
}

function getAuthentication() {
    return JSON.parse(localStorage.getItem("auth"));
}

function getAuthToken() {
    if (isAuthenticated()) {
        return getAuthentication().token;
    }
    return "";
}