// to add event listener to all delete button
for (var i = 0; i < 5; i++) {
  document
    .getElementsByClassName("sub-item-2")
    [i].setAttribute("data-toggle", "modal");

  document
    .getElementsByClassName("sub-item-2")
    [i].setAttribute("data-target", "#delete-post");
}

function noDeleteModalBtn() {
  var url = window.location.href;
  window.location.href = url;
}

//giving id to each post-card

for (var i = 0; i < 5; i++) {
  document
    .getElementsByClassName("post-card")
    [i].setAttribute("id", "card-" + i);
}

//adding every posts in a array
var postCardList = [];

for (var i = 0; i < 5; i++) {
  var card = document.getElementById("card-" + i);
  postCardList.push(card);
}

//functionality not working properly...toDo
function yesDeleteModalBtn() {
  document.getElementById("card-0").style.display = "none";
}

//navigate to post.html file
for (var i = 0; i < 5; i++) {
  document
    .getElementsByClassName("sub-item-3")
    [i].addEventListener("click", function () {
      window.location.href = "post.html";
    });
}
