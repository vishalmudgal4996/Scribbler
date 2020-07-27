$(document).ready(function () {
  function alignModal() {
    var modalDialog = $(this).find(".modal-dialog");

    // Applying the top margin on modal dialog to align it vertically center
    modalDialog.css(
      "margin-top",
      Math.max(0, ($(window).height() - modalDialog.height()) / 2)
    );
  }
  // Align modal when it is displayed
  $(".modal").on("shown.bs.modal", alignModal);

  // Align modal when user resize the window
  $(window).on("resize", function () {
    $(".modal:visible").each(alignModal);
  });
});

function showSignUpDialogOnly() {
  var element = document.getElementById("sign-in");
  element.innerHTML = "";
}

function pageReload() {
  var url = window.location.href;
  window.location.href = url;
}

//to reset signin form
function signIn() {
  document.getElementById("signin-form").reset();
}

//to reset signup form
function signUp() {
  document.getElementById("signup-form").reset();
}
