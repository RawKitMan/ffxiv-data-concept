$(document).ready(function () {
    let charResults = {};

    getCharacterInfo();

    function getCharacterInfo() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', `https://xivapi.com/character/search?name=Cenne+Hyskaris&server=Lamia`);
        xhttp.onload = function () {
            charResults = JSON.parse(this.response).Results[0];
            console.log(charResults);
            getCharacterInfoById(charResults.ID);
        }
        xhttp.send();
    }
    function getCharacterInfoById(id) {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', `https://xivapi.com/character/${id}`);
        xhttp.onload = function () {
            charResults = JSON.parse(this.response).Character;
            $('#avatar').html("<img src='" + charResults.Portrait + "' height=200 alt='" + charResults.Name + "' />");
            $('#job').html(`<h3>${charResults.ActiveClassJob.UnlockedState.Name}</h3>`);
            $('#freeCompany').html(`<h3>${charResults.FreeCompanyName}</h3>`);
        }
        xhttp.send();
    }

});