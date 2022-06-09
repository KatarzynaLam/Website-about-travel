
console.log(sessionStorage.formData);

var d = JSON.parse(sessionStorage.formData);
console.log(d);

var data = {
    country:d.country,
    town:d.town,
    description:d.description,
    photo:d.photo,
    countStars:d.countStars
}


console.log(data.country);
var images = document.getElementsByClassName('placesImages')[0];
var townName = document.getElementsByClassName('townsName')[0];
var countryName = document.getElementsByClassName('countriesName')[0];
var countStars = document.getElementsByClassName('count')[0];




var town = document.createElement('p');
var country = document.createElement('p');
var image = document.createElement('img');
var count = document.createElement('p');


image.src=data.photo;
town.innerHTML = data.town;
country.innerHTML = data.country;
count.innerHTML = data.countStars;

townName.appendChild(town);
images.appendChild(image);
countryName.appendChild(country);
countStars.appendChild(count);






