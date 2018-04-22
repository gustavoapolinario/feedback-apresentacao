"usea strict";
window.addEventListener('load', () => {
    var presentationList = new PresentationList();
    console.log(presentationList.apiUrl);
    presentationList.getList().then(json => console.log(json));
});