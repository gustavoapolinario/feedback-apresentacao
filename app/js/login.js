"usea strict";
class Login {
    get apiUrl() {
        return 'json/apresentacoes.html'
        //return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    set email(value) {
        this._email = value;
    }
    set displayName(value) {
        this._displayName = value;
    }
    set photoURL(value) {
        this._photoURL = value;
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
                body: body,
                cors: 'no-cors'
            }
            headers.method= 'GET'

            fetch(apiUrl, headers)
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
}

