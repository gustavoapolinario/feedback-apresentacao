"usea strict";
class VerifyLogin {

    constructor() {
        this.loadFromLocalstore()
    }

    loadFromLocalstore() {
        this._uid = localStorage.getItem('userId');
    }

    isLogged() {
        return this._uid != null;
    }

    redirect() {
        if( this.isLogged() ) {
            document.location = 'presentation-list.html'
        }
        else {
            document.location = 'login.html'
        }
    }
    redirectIfNotLogged() {
        if( !this.isLogged() ) {
            document.location = 'login.html'
        }
    }

}

