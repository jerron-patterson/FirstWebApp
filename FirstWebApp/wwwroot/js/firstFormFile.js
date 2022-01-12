$("#formBtn").click(function () {
    alert("From " + $("#labeltxt").val() +
        " input: " + $("#inputtxt").val() +
        " text box: " + $("#messtxt").val())
    $("#picture1").fadeToggle("slow")
})