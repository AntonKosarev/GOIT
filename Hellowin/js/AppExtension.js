// create timeline here for the better code visibility
var timeline = new TimelineMax();
var isPlaying = true;


function initListenners () {
    console.log ("init listenners...");
    $("#touch_screen").click(function() {
        if (timeline.progress() == 1) {
            timeline.restart();

            isPlaying = true;
            var audio = document.getElementById('audio');
            audio.play(); //call this to play the song right away

            return;
        };

        if (isPlaying) {
            // pause playback
            console.log("pause");
            $("#play_button").css('visibility', 'visible');
            isPlaying = false;
            timeline.pause();
            extension_onPauseAnimation(timeline.time());
        } else {
            // resume playback
            console.log("resume");
            $("#play_button").css('visibility', 'hidden');
            isPlaying = true;
            timeline.resume();
            extension_onResumeAnimation();
        }
    });
}

// extensions part to hook with the Native application
var ms_since_start = 0;

// returns the msElapsedSinceStart   for restarts
function extension_onStartAnimation () {
    // this is a hook request, so the webview can externally
    // catch the event of animation start
    // window.location.href = "localhost://start_hook";
    
    ms_since_start = 0;
    return ms_since_start;
}

// notify pause request
function extension_onPauseAnimation (msSinceStart) {

    // pause audio with JS
    var audio = document.getElementById('audio');
    audio.pause();
    
    ms_since_start = msSinceStart;
}

//   resume has been requested
function extension_onResumeAnimation () {
    // resume audio with JS
    var audio = document.getElementById('audio');
    audio.play();
    return ms_since_start;
}

//   animation will end
function extension_onEndAnimation () {
    // stop the music
//    var audio = document.getElementById('audio');
//    audio.pause();

    // this is a hook request, so the webview can externally
    // catch the event of animation finish
    // window.location.href = "localhost://finish_hook";

    console.log("end of animation");
    return;
}

//  return 1 if restart has been requested
function extension_onCheckRestart (anim_restart, ms_from_start) {
    return 0;
}
