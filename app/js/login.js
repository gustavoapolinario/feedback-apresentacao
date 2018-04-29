"usea strict";
class Login {

    constructor() {
        this.loadFromLocalstore()
    }

    get apiUrl() {
        return 'json/apresentacoes.html'
        //return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get photoURL() {
        return this._photoURL;
    }
    set photoURL(value) {
        this._photoURL = value;
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }

    createUser() {
        var apiUrl = this.apiUrl;

        var body = {
            email: this._email,
            displayName: this._displayName,
            photoURL: this.p_hotoURL,
            uid: this._uid
        }
        return new Promise((resolve, reject) => {
            var headers = {
                method: "POST",
                body: JSON.stringify(body),
                cors: 'no-cors',
                cache: "no-cache",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }

			//var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
			//fetch(proxyUrl + apiUrl, headers)
			fetch(apiUrl)//TEMPORARY
            .then(response => {
                if(response.ok) {
                    response.json().then(json => {
                        resolve(json);
                    });
                }
                else {
                    reject('Erro ao tentar pegar a lista de apresentações')
                }
            })
              
        });
    }

    serverResponse(json) {

    }

    saveToLocalstore() {
        localStorage.setItem('userId', this._uid);
        localStorage.setItem('image', this._photoURL);
    }
    loadFromLocalstore() {
        this._uid = localStorage.getItem('userId');
        this._photoURL = localStorage.getItem('image');
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

