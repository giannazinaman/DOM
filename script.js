const button = document.getElementById("dogButton");
const dogContainer = document.getElementById("dogContainer");

button.addEventListener("click", getDog);

function getDog() {
fetch("https://dog.ceo/api/breeds/image/random")
then(res => res.json())
then(data => {
dogContainer.innerHTML = `
<p>Here is your random dog!</p>
<img src="${data.message}" alt="Random dog">
      `;
});
}