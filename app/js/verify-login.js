"usea strict";
class VerifyLogin {
    static get isLogged() {
        return localStorage.getItem("login") == 1;
    }
}

