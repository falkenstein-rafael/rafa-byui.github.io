var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var townsInfo = request.response;
    showTowns(townsInfo);
}



function showTowns(jsonObj) {
    var towns = jsonObj['towns'];


    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == 'Preston') {
            var prestonCard = document.getElementById("preston-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");


            myH2.textContent = towns[i].name;
            myh3.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].yearFounded;
            myPara4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + "''";
            img.src = "images/preston.jpg";
            img.alt = 'alt="Preston Pic"';

            /*var superPowers = heroes[i].powers;
            for (var j = 0; j < superPowers.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = superPowers[j];
                myList.appendChild(listItem);
            }*/

            prestonCard.appendChild(myH2);
            prestonCard.appendChild(myh3);
            prestonCard.appendChild(myPara2);
            prestonCard.appendChild(myPara3);
            prestonCard.appendChild(myPara4);
            prestonCard.appendChild(img);

        } else if (towns[i].name == 'Soda Springs') {
            var sodaSpringsCard = document.getElementById("soda-springs-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");

            myH2.textContent = towns[i].name;
            myh3.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].yearFounded;
            myPara4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + "''";
            img.src = "images/soda-springs.jpg";
            img.alt = 'alt="Soda Springs Pic"';

            /*var superPowers = heroes[i].powers;
            for (var j = 0; j < superPowers.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = superPowers[j];
                myList.appendChild(listItem);
            }*/

            sodaSpringsCard.appendChild(myH2);
            sodaSpringsCard.appendChild(myh3);
            sodaSpringsCard.appendChild(myPara2);
            sodaSpringsCard.appendChild(myPara3);
            sodaSpringsCard.appendChild(myPara4);
            sodaSpringsCard.appendChild(img);
        } else if (towns[i].name == 'Fish Haven') {
            var fishHavenCard = document.getElementById("fish-haven-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");

            myH2.textContent = towns[i].name;
            myh3.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].yearFounded;
            myPara4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + "''";
            img.src = "images/fish-haven.jpg";
            img.alt = 'alt="Fish Haven Pic"';

            /*var superPowers = heroes[i].powers;
            for (var j = 0; j < superPowers.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = superPowers[j];
                myList.appendChild(listItem);
            }*/

            fishHavenCard.appendChild(myH2);
            fishHavenCard.appendChild(myh3);
            fishHavenCard.appendChild(myPara2);
            fishHavenCard.appendChild(myPara3);
            fishHavenCard.appendChild(myPara4);
            fishHavenCard.appendChild(img);
        }
    }
}