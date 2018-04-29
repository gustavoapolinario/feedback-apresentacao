"usea strict";
class PresentationVote {
    get apiUrl() {
        return 'json/apresentacoes.html'
        //return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    setVoteToPresentation(presentationId, voted) {
        var apiUrl = this.apiUrl;

        var login = new Login()
        var body = {
            presentationId: presentationId,
            user: login.uid,
            voted: voted
        }
        return new Promise((resolve, reject) => {
            var headers = {
                method: "POST",
                body: body,
                cors: 'no-cors'
            }
            headers.method= 'GET'

            fetch(apiUrl)
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

