var imagesArray = ["img/JT_BRUINS.jpg", "img/JT_CAPECOD.jpg", "img/JT_CAPECOD2.jpg", "img/JT_Cropped.jpg",
"img/JT_FLIPOFF.jpg", "img/JT_HAT.jpg", "img/JT_PRO.jpg", "img/JT_SHEPPLE.jpeg", "img/JT_SMILE.jpg", "img/JT_Yawn.jpg"];

function displayImage() {
    var num = Math.floor(Math.random() * 10); // 0...9
    document.getElementById("JT_SHEPPLE_IS_SO_COOL").src=imagesArray[num];
}
