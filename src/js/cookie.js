function openCookieModal(){

    $(".cookie-advice").show();
        $("html").css("overflow","hidden");
}

function closeCookieModal(){
    $(".cookie-advice").hide();
        $("html").css("overflow","visible");
          location.reload();
}

function turnCookieModal(nextPage){
if(nextPage == 2 ){
console.log("CurrentPage = 1, Turning modal to Page 2");
$(".cookie-advice__choice").hide();
$(".cookie-advice__info").show();

}
else{
console.log("CurrentPage = 2, Turning modal to Page 1");
$(".cookie-advice__choice").show();
$(".cookie-advice__info").hide();
}
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  if (exdays == 0) {
    expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    console.log("exdays = 0");
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname, cvalue) {
  var searchingfor = getCookie(cname).split(",");
    for (var i = 0; i < searchingfor.length; i++) {
      var search = searchingfor[i];
      if (search.indexOf(cvalue) == 0) {
        console.log(search);
        return search;
      }
}
}


function writeCookieToBody(cname){
      var cookieValues = getCookie(cname).split(",");
      console.log(cookieValues);
      for (var i = 0; i < cookieValues.length; i++) {
        var cookieValue = cookieValues[i];
        $("body").addClass("cookiechoice__" + cookieValue);
      }
}


$(document).ready(function() {

  //check if cookiechoice is already there (essential is always set)
  if(checkCookie("cookiechoice", "essential") == "essential" ){
    console.log("cookiechoice cookie found");
    writeCookieToBody("cookiechoice");
    //cookiemodal stays hidden because display none
    } else{
    openCookieModal();
  }





  // if save button is clicked push all the checkbox values to cookie (cookie is deleted first then reset)
  $("#accept-selected").click(function() {
    var cookieSelection = [];
    console.log(cookieSelection);
    setCookie("cookiechoice", "deleted", 0);
    console.log("Speichern clicked");

    if ($("#checkbox-essential").is(":checked")) {
      console.log("Essential pre-selected");
      cookieSelection.push("essential");


    }

    if ($("#checkbox-preferences").is(":checked")) {
      console.log("Präferenzen selected");
      cookieSelection.push("preferences");

    }
    if ($("#checkbox-statistics").is(":checked")) {
      console.log("Statistiken selected");
      cookieSelection.push("statistics");

    }
    if ($("#checkbox-marketing").is(":checked")) {
      console.log("Marketing selected");
      cookieSelection.push("marketing");

    }

    //join values from array to a string and set cookie with this string
    var cookieValue = cookieSelection.join(",");
    setCookie("cookiechoice", cookieValue, 30);

    //close and reload
    closeCookieModal();

  });


    //if select all is clicked push all value to cookie
    $("#accept-all").click(function() {
      setCookie("cookiechoice", "deleted", 0);
      var cookieSelection = ["essential","preferences","statistics","marketing"];
      var cookieValue = cookieSelection.join(",");
      setCookie("cookiechoice", cookieValue, 30);
      closeCookieModal();
    });


    $("#cookie_details").click(function() {
          turnCookieModal(2);

    });

    $("#cookie_details_back, #cookie_details_back_top").click(function() {
          turnCookieModal(1);

    });

    $('a[href*="#opencookiesettings"]').click(function() {
        openCookieModal();
});





});
