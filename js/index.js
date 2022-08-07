// function to create elements inside the article tag that will be used to render the numbered cards on the screen.
function renderCards(array) {
  document.getElementsByTagName("article")[0].innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let element = document.createElement("div");
    element.className = "card";

    element.innerHTML = array[i];
    document.getElementsByTagName("article")[0].appendChild(element);
  }
}

// function to create a random numbered array which is passed to the renderCards function to shuffle the numbered cards.
function shuffleCards(array) {
  array.sort(() => Math.random() - 0.5);
  renderCards(array);
}

// function to create a sorted array which is passed to the renderCards function to sort the numbered cards in ascending order.
function sortCards(array) {
  array.sort();
  renderCards(array);
}

// function to return an array of numbers 1-9
function getArray() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
