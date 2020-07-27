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

//to hide the sign-in modal when signUp link clicked

function notAMember() {
  document.getElementById("sign-in").innerHTML = "";
}

//to refresh the page when signup cross button clicked
function pageReload() {
  window.location.href = "index.html";
}

//to reset signin form
function signIn() {
  document.getElementById("signin-form").reset();
}
