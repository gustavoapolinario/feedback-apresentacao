"usea strict";
class PresentationList {
    get apiUrl() {
        return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    getList(resolve, reject) {
        var apiUrl = this.apiUrl;
        return new Promise(function(resolve, reject) {

            var myInit = { method: 'GET',
            headers: new Headers(),
            mode: 'no-cors',
            cache: 'default' };

            fetch(apiUrl, myInit)
                .then(function(response) {
                    var contentType = response.headers.get("content-type");
                    if(contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json().then(function(json) {
                            resolve(json);
                        });
                    } else {
                        console.log(response)
                        reject(Error("Oops, we haven't got JSON!"));
                    }
                });
        });
    }
}
window.addEventListener('load', () => {
    var presentationList = new PresentationList();
    console.log(presentationList.apiUrl);
    presentationList.getList().then(json => console.log(json));
});
