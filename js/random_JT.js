/*
    Sources:
    http://jsbin.com/ExeHoHu/1/edit?html,js,output
    https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
    http://www.w3schools.com/jsref/event_onload.asp
*/
var imagesArray = ["img/JT_BRUINS.jpg", "img/JT_CAPECOD.jpg", "img/JT_CAPECOD2.jpg", "img/JT_Cropped.jpg",
"img/JT_FLIPOFF.jpg", "img/JT_FLIPOFF2.jpg", "img/JT_FLIPOFF3.jpg", "img/JT_HAT.jpg", "img/JT_PRO.jpg", "img/JT_SHEPPLE.jpeg", "img/JT_SMILE.jpg", "img/JT_Yawn.jpg"];

function displayImage() {
    var num = Math.floor(Math.random() * 12); // 0...11
    document.getElementById("JT_SHEPPLE_IS_SO_COOL").src=imagesArray[num];
}
