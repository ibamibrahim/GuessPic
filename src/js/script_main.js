$(document).ready(function() {

    // method buat bikin stop watch

    $("#startButton").click(function() {

        //TODO: give condition what state is the button is pressed (stop or start)

        setInterval(countUp, 100);

        $("#startButton").prop("value", "Stop");

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

    // memasukkan image ke div tableArea 

    var tableArea = 

    var shuffledArray = shuffleArray(imageUrl);
    console.log(shuffledArray.toString());
});