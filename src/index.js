console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    fetchDogImages();

});
function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
   .then(response => response.json())
   .then(data => {
    let images = data.message 
    images.forEach(image => {
    loadImagesToDom(image)
    });

   })}


function loadImagesToDom(image){
    let dogsCont = document.getElementById("dog-image-container")
    let ourImg = document.createElement('img')
    ourImg.src = image
    dogsCont.appendChild(ourImg)
};


document.addEventListener('DOMContent' , function(){
    fetchDogBreed()
});
function fetchDogBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(results => {
     const breeds = Object.keys(results.message);
    addBreeds(breeds);
    });

}
function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener("click", function(event) {
        event.target.style.color = "blue";
      });
    });
  }