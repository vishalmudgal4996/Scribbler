// to add event listener to all delete button
for (var i = 0; i < 5; i++) {
  document
    .getElementsByClassName("sub-item-2")
    [i].setAttribute("data-toggle", "modal");

  document
    .getElementsByClassName("sub-item-2")
    [i].setAttribute("data-target", "#delete-post");
}
