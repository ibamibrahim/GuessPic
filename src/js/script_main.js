$(document).ready(function() {

    // method buat bikin stop watch

    $("#startButton").click(function() {

        //TODO: give condition what state is the button is pressed (stop or start)

        setInterval(countUp, 1);

        /*$("#startButton").prop("value", "Stop");*/

        function countUp() {
            var timer = $('#timer').find('.stopwatch');

            var countSecond = parseInt(timer.attr("value"), 10);
            countSecond = countSecond + 1;

            var hour = Math.floor(countSecond / 3600);
            var minutes = Math.floor((countSecond / 60) % 60);
            var seconds = countSecond % 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (hour < 10) {
                hour = "0" + hour;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            var totalTime = hour + ":" + minutes + ":" + seconds;

            timer.attr("value", countSecond + "");

            $('#timer').find('.value').text(totalTime);
            $('#timer').find('.stopwatch').text(totalTime);

        }
    });
    // shuffle image array

    var username = localStorage.getItem("username");

    $('#playerUsername').text("Username: " + username);

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */

     /*
    var imageUrl = ["src/images/ane.png", "src/images/amru.png", "src/images/ariz.png", "src/images/erlangga.png", "src/images/fadzil.png", "src/images/mail.png", "src/images/mola.png", "src/images/rijal.png", "src/images/ane.png", "src/images/amru.png", "src/images/ariz.png", "src/images/erlangga.png", "src/images/fadzil.png", "src/images/mail.png", "src/images/mola.png", "src/images/rijal.png"];*/

    var imageNameArr = ["ane.png", "amru.png", "ariz.png", "erlangga.png", "fadzil.png", "mail.png", "mola.png", "rijal.png", "ane.png", "amru.png", "ariz.png", "erlangga.png", "fadzil.png", "mail.png", "mola.png", "rijal.png"]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    var shuffledArray = shuffleArray(imageNameArr);

    // memasukkan image ke div tableArea 

    var tableArea = $("#tableArea");
    var columnCounter = 1;
    tableArea.append('<table>');

    var idImage = 0;

    for (var i = 0; i < shuffledArray.length; i++) {
        var imageName = shuffledArray[i];

        if (columnCounter == 1) {
            tableArea.append("<tr>");
        }

        tableArea.append('<td width="120" height="120"><img class="clickableImage" src= "src/images/back.png" width="100" id=image_' + idImage + ' alt="' + imageName + '"></td>')

        columnCounter++;

        if (columnCounter == 5) {
            tableArea.append("</tr>");
            columnCounter = 1;
        }

        idImage++;
    }

    tableArea.append("</table>");

    var clickedImage = "";
    var score = 0;
    var counterClick = 0;
    var logArea = $("#logGameplay");

 /*   var counterasd = 1; 
    setInterval(function(){
    	console.log(counterasd + ". clickedImage " + clickedImage);
    	counterasd++;
    }, 2000);*/

    $('.clickableImage').click(function() {
        var imageID = $(this).prop("id");
        var imageURL = $(this).prop("alt");

       	$(this).prop("src", "src/images/" + imageURL);


        // jika clickedImage empty
        if (clickedImage != "") {

            // buat kebutuhan debugging aja
            var firstImageID = clickedImage;
            var secondImageID = imageID;

            var firstImage = $("#" + firstImageID);
            var secondImage = $("#" + secondImageID);

            var firstImageUrl = $("#" + firstImageID).prop("alt");
            var secondImageUrl = $('#' + secondImageID).prop("alt");

            // membandingkan apakah kedua image merupakan image yang sama
            // jika sama maka score bertambah, image tidak bisa diclick lagi (unclickable)
            // jika beda, maka score tetap, image tetap bisa di click lagi, image flipped, first image dihapus, dan debug clicked image dihapus

            if (firstImageUrl == secondImageUrl) {

            	secondImage.removeClass("clickableImage");

                score += 1;
                clickedImage = "";
                
                if (score == 8) {
                    alert("Game over!");
                }
                
                console.log("score " + score);
            } else {

                clickedImage = "";

                console.log("clickedImage" + clickedImage);

                firstImage.addClass("clickableImage");
                
                var interval = setInterval(closeImage, 500);

                function closeImage(){
                   	firstImage.prop("src", "src/images/back.png");
                	secondImage.prop("src", "src/images/back.png");
                	clearInterval(interval);
                }
            }

        } else {
            clickedImage = imageID;
			var clicked = $("#" + imageID);

			clicked.removeClass("clickableImage");

            console.log(clickedImage);
        
        }

    });


});

// TODO: stop timer, store hasil score, bagusin UI nya kalo sempet
// http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage