const g = $G("Mika", "Chan");
// console.log(g);

// console.log(g.fullName());

g.greet().greet(true);

g.greet().setLang("es").greet(true);

$(document).ready(function () {
  $("#login").on("click", function () {
    console.log("clicked");
    var loginGrtr = $G("John", "Doe");
    $("#logindiv").hide();

    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
  });
});
