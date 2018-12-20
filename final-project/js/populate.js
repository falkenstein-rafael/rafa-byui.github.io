


var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'data/closure.json');
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(request.responseText);
    }
};
request.send(null); 

request.onload = function () {
    var templeInfo = request.response;
    showTemple(templeInfo);
}



function showTemple(jsonObj) {
    var temple = jsonObj['temple'];


    for (var i = 0; i < temple.length; i++) {
        if (temple[i].name == 'Preston') {
            var prestonCard = document.getElementById("preston-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");


            myH2.textContent = temple[i].name;
            myh3.textContent = temple[i].motto;
            myPara2.innerHTML = '<b>' + 'Year Founded: ' + '</b>' + temple[i].yearFounded;
            myPara3.innerHTML = '<b>' + 'Population: ' + '</b>' + temple[i].yearFounded;
            myPara4.innerHTML = '<b>' + 'Annual Rain Fall: ' + '</b>' + temple[i].averageRainfall + "''";
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

        } else if (temple[i].name == 'Soda Springs') {
            var sodaSpringsCard = document.getElementById("soda-springs-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");

            myH2.textContent = temple[i].name;
            myh3.textContent = temple[i].motto;
            myPara2.innerHTML = '<b>' + 'Year Founded: ' + '</b>' + temple[i].yearFounded;
            myPara3.innerHTML = '<b>' + 'Population: ' + '</b>' + temple[i].yearFounded;
            myPara4.innerHTML = '<b>' + 'Annual Rain Fall: ' + '</b>' + temple[i].averageRainfall + "''";
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
        } else if (temple[i].name == 'Fish Haven') {
            var fishHavenCard = document.getElementById("fish-haven-card");
            var myH2 = document.createElement('h2');
            var myh3 = document.createElement('h3');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            /*var myList = document.createElement('ul');*/
            var img = document.createElement("img");

            myH2.textContent = temple[i].name;
            myh3.textContent = temple[i].motto;
            myPara4.innerHTML = '<b>' + 'Annual Rain Fall: ' + '</b>' + temple[i].averageRainfall + "''";
            myPara2.innerHTML = '<b>' + 'Year Founded: ' + '</b>' +  temple[i].yearFounded;
            myPara3.innerHTML = '<b>' + 'Population: ' + '</b>' + temple[i].yearFounded;
            myPara4.innerHTML = '<b>' + 'Annual Rain Fall: ' + '</b>' +temple[i].averageRainfall + "''";
            img.src = "images/fish-haven.jpg";
            img.alt = 'alt="Fish Haven Pic"';

            fishHavenCard.appendChild(myH2);
            fishHavenCard.appendChild(myh3);
            fishHavenCard.appendChild(myPara2);
            fishHavenCard.appendChild(myPara3);
            fishHavenCard.appendChild(myPara4);
            fishHavenCard.appendChild(img);
        }
    }
}