// each time the window is loaded, the array will be passed on to the renderCards function
let array = getArray();
window.addEventListener("load", function () {
  renderCards(array);
});
