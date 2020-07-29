//making post button toggle
function toggleEditSave() {
  var toggleEdit = document.getElementById("editPostSection");

  if (toggleEdit != null) {
    if (toggleEdit.style.display === "none") {
    } else {
      var savePostbtn =
        "<div id='savePostSection'><button id='savePost' class='post-btn'>Save <i class='fa fa-save'></i></button></div> ";
      document.getElementsByClassName("postButtons")[0].innerHTML = savePostbtn;

      var element = document.getElementById("post-head");
      element.classList.add("editable-border");

      var element = document.getElementById("post-msg");
      element.classList.add("editable-border");
    }
  } else {
    var editPostbtn =
      "<div id='editPostSection'><button id='editPost' class='post-btn'>Edit <i class='fa fa-pencil-square-o'></i></button></div>";
    document.getElementsByClassName("postButtons")[0].innerHTML = editPostbtn;

    var element = document.getElementById("post-head");
    element.classList.remove("editable-border");

    var element = document.getElementById("post-msg");
    element.classList.remove("editable-border");
  }
}
