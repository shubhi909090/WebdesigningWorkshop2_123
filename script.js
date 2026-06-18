function searchImages() {
  let searchText = document.getElementById("search").value;
  
  if (searchText === "") {
    alert("Please enter something to search");
  } else {
    alert("You searched for: " + searchText);
  }
}