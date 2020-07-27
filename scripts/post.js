function editComment() {}
function incrementCounter() {
  var cntr = document.getElementById("counterLikedBy");
  var val = parseInt(cntr.innerText);
  cntr.innerText = val + 1;
}

function toggleEditSave() {
  var toggleSave =
    '<button class="postEdit">Save ' +
    '<i style="font-size: 14px;font-weight: bolder;" ' +
    'class="fa fa-save" aria-hidden="true"></i>' +
    "</button>";
  var toggleEdit =
    '<button class="postEdit">Edit ' +
    '<i style="font-size: 14px;font-weight: bolder;" ' +
    'class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
    "</button>";

  var edtSaveBtn = document.getElementById("editPost");
  var toDo = edtSaveBtn.innerText.toString().trim();

  if (toDo.localeCompare("Edit") === 0) {
    // console.log("Currently Edit");
    var bSave = document.getElementById("editPost");
    bSave.innerHTML = toggleSave;
    enableEditableText();
  } else {
    // console.log("Currently Save");
    var bEdit = document.getElementById("editPost");
    bEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }
}

function enableEditableText() {
  var getBlogContentEle = document.getElementById("blogBody");
  var getBlogContent = getBlogContentEle.innerText;

  //Div element
  var getDiv = document.getElementById("blogBodyId");
  //Create a input element
  var inputElement =
    '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="205">' +
    getBlogContent +
    "</textarea>";
  //Update the Div element
  getDiv.innerHTML = inputElement;
}
function updateEditedBlog() {
  var editedBlog = document.getElementById("txtEditedBlog");

  var textEdited = editedBlog.innerHTML.toString();

  var pElement = '<p id="blogBody">' + textEdited + "</p>";
  var getDiv = document.getElementById("blogBodyId");
  getDiv.innerHTML = pElement;

  var toggleTitileSave =
    "UPDATED: <h id='blogTitleNew'>Everything you should know about 'module' & 'require' in Node.js</h>";

  var bEditUpdate = document.getElementById("blogTitleNew");
  bEditUpdate.innerHTML = toggleTitileSave;
}
function addComment() {
  var x = document
    .getElementById("txtCommentCommentPost")
    .addEventListener("onchange", function () {
      document.getElementById("txtCommentCommentPost").innerHTML;
    });

  var x = document.getElementById("txtCommentCommentPost").value;

  var pElement = "<p >" + x + "</p>";
  var getDiv = document.getElementById("listAllComments");
  //   getDiv.innerHTML = pElement + getDiv.innerHTML;
}

function addComments(id) {
  var addEventName = id.value + "<br>";
  var a = document.getElementById("userComments");
  document.getElementById("addEventNames").innerHTML +=
    "<p class='comment-para'>" + addEventName + "</p>";
  a.value = a.defaultValue;
}
