//making post button toggle
function toggleEditSave() {
  var toggleEdit = document.getElementById("editPostSection");

  if (toggleEdit != null) {
    if (toggleEdit.style.display === "none") {
    } else {
      var savePostbtn =
        "<div id='savePostSection'><button id='savePost' class='post-btn'>Save <i class='fa fa-save'></i></button></div> ";
      document.getElementsByClassName("postButtons")[0].innerHTML = savePostbtn;

      borderVisible();

      contentEditable();
    }
  } else {
    var editPostbtn =
      "<div id='editPostSection'><button id='editPost' class='post-btn'>Edit <i class='fa fa-pencil-square-o'></i></button></div>";
    document.getElementsByClassName("postButtons")[0].innerHTML = editPostbtn;

    borderInvisible();

    contentNotEditable();
  }
}

//making editable border visible

function borderVisible() {
  var elementHead = document.getElementById("post-head");
  elementHead.classList.add("editable-border");

  var elementMsg = document.getElementById("post-msg");
  elementMsg.classList.add("editable-border");
}

//making editable border invisible

function borderInvisible() {
  var elementHead = document.getElementById("post-head");
  elementHead.classList.remove("editable-border");

  var elementMsg = document.getElementById("post-msg");
  elementMsg.classList.remove("editable-border");
}

//making content editable

function contentEditable() {
  var elementHead = document.getElementById("post-head");
  elementHead.contentEditable = "true";

  var elementMsg = document.getElementById("post-details-para-subItem-1");
  elementMsg.contentEditable = "true";
}

// making content Non editable

function contentNotEditable() {
  var elementHead = document.getElementById("post-head");
  elementHead.contentEditable = "false";

  var elementMsg = document.getElementById("post-details-para-subItem-1");
  elementMsg.contentEditable = "false";
}

//like counter functionality

var likeCounter = 0;

function postLiked() {
  var likeElement = document.getElementById("commentCount");
  var buttonElement = document.getElementById("likeBlog");
  likeCounter++;
  likeElement.innerHTML = likeCounter + " person likes this!";
  buttonElement.innerHTML = "<i class='fa fa-thumbs-up'> Liked!</i>";
}

//comment post functionality

function addComments(id) {
  if (id.value == "") {
    alert("Please Provide Details!");
    id.focus();
    return false;
  } else {
    var addEventName = id.value + "<br>";
    var event = document.getElementById("userComments");
    var eventNames = document.getElementById("addEventNames");

    eventNames.innerHTML =
      "<p class = 'comment-para'>" +
      addEventName +
      "</p>" +
      eventNames.innerHTML;

    //add and remove class to addEventNames
    eventNames.classList.add("visible");

    //setting default value to textarea
    event.value = event.defaultValue;
  }
}
