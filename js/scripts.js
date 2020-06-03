$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const description = $("input#description").val();
    const date = $("input#date").val();
    const start =$("input#start").val();
    const end = $("input#end").val();

    $("#result1").text(name);
    $("#result2").text(description);
    $("#result3").text(date);
    $("#result4").text(start);
    $("#result5").text(end);

    $("#summary").show();


  });
});