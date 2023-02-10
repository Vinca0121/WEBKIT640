
$.fn.myPlugin = function(data) {
    console.log("Data : " + data);
    $(this)
        .text(data)
        .css({
            "color":"green",
            "background-color": "pink"
        });
    // 메서드 체인이 가능하도록 this를 반환
    return this;
};
// $(document).ready(function(){
//     $("h1").css("color", "red").myPlugin("kim").css("background-color", "pink")
// });
