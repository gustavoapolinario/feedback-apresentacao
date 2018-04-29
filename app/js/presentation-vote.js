"usea strict";
class PresentationVote {
    get apiUrl() {
        return 'https://feedback-apresentacao.herokuapp.com/api/votos/novo-voto';
    }

    setVoteToPresentation(presentationId, voted) {
        var apiUrl = this.apiUrl;

        var login = new Login();

        var body = {
            codigoApresentacao: presentationId,
            codigoUsuario: 1,
            voto: voted
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

			var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
			fetch(proxyUrl + apiUrl, headers)
            .then(response => {
                console.log(response)
                if(response.ok) {
                    response.json().then(json => {
                        resolve(json);
                    });
                }
                else {
                    reject()
                }
            })
              
        });
    }
}

