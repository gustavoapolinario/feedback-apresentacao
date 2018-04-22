"usea strict";
class PresentationList {
    get apiUrl() {
        return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    getList(resolve, reject) {
        var apiUrl = this.apiUrl;

        return new Promise((resolve, reject) => {
            var options = { mode: 'no-cors' };
            fetch(apiUrl, options).then( response => resolve(response) );
        });
    }
}

