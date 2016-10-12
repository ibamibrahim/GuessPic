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
    var imageUrl = ["src/images/ane.png", "src/images/amru.png", "src/images/ariz.png", "src/images/erlangga.png", "src/images/fadzil.png", "src/images/mail.png", "src/images/mola.png", "src/images/rijal.png", "src/images/ane.png", "src/images/amru.png", "src/images/ariz.png", "src/images/erlangga.png", "src/images/fadzil.png", "src/images/mail.png", "src/images/mola.png", "src/images/rijal.png"]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    var shuffledArray = shuffleArray(imageUrl);

    // memasukkan image ke div tableArea 

    var tableArea = $("#tableArea");
    var columnCounter = 1;
    tableArea.append('<table cellspacing="10">');

    var idImage = 0;

    for (var i = 0; i < shuffledArray.length; i++) {
        var imageUrl = shuffledArray[i];

        if (columnCounter == 1) {
            tableArea.append("<tr>");
        }

        tableArea.append('<td width="120" height="120"><img class="clickableImage" src="' + imageUrl + '" width="100" id=image_' + idImage + '></td>')

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

    $('.clickableImage').click(function() {
        var imageID = $(this).prop("id");
        var imageURL = $(this).prop("src");

        // jika clickedImage empty
        if (clickedImage != "") {

            // buat kebutuhan debugging aja
            console.log(imageID);
            logArea.append(imageID + " opened");
            logArea.append('<br>');

            var firstImageID = clickedImage;
            var secondImageID = imageID;

            var firstImage = $("#" + firstImageID);
            var secondImage = $("#" + secondImageID);

            var firstImageUrl = $("#" + firstImageID).prop("src");
            var secondImageUrl = $('#' + secondImageID).prop("src");

            // membandingkan apakah kedua image merupakan image yang sama
            // jika sama maka score bertambah, image tidak bisa diclick lagi (unclickable)
            // jika beda, maka score tetap, image tetap bisa di click lagi, image flipped, first image dihapus, dan debug clicked image dihapus

            if (firstImageUrl == secondImageUrl) {
                score += 1;
                clickedImage = "";
                if (score == 8) {
                    alert("you win");
                }
                console.log("score " + score);
                logArea.empty();
            } else {
                clickedImage = "";
                logArea.empty();
            }

        } else {
            clickedImage = imageID;
            console.log(clickedImage);
            logArea.append(imageID + " opened");
            logArea.append('<br>');
        }

    });


});