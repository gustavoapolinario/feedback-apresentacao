"usea strict";
class PresentationListModel {
	get apiUrl() {
		return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
	}

	getList() {
		var apiUrl = this.apiUrl;

		return new Promise((resolve, reject) => {
			var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
			var options = {cors:'no-cors'}
			fetch(proxyUrl + apiUrl, options)
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
