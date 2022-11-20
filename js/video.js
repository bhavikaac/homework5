// Add js here.
var vid = document.getElementById('videoplayer');

document.getElementById('play').onclick = function (){
    vid.play();
};

document.getElementById('pause').onclick = function (){
    vid.pause();
};

document.getElementById('mute').onclick = function (){
    if(vid.muted === false){
        vid.muted = true;
        document.querySelector('#mute').innerHTML = 'Unmute';
    }
    else{
        vid.muted = false;
        document.querySelector('#mute').innerHTML = 'Mute';
    }
};

document.getElementById('slower').onclick = function () {
    if(document.querySelector('#videoplayer').playbackRate === 0.5){
        alert("Video is at lowest speed!");
    }
    else{
        document.querySelector('#videoplayer').playbackRate *= 0.5;
    }
}

document.getElementById('faster').onclick = function () {
    if(document.querySelector('#videoplayer').playbackRate === 2){
        alert("Video is at fastest speed!");
    }
    else{
        document.querySelector('#videoplayer').playbackRate *= 2;
    }
}

document.getElementById('skip').onclick = function () {
    vid.currentTime += 15;
}  

vid.addEventListener('ended', function(){
    vid.currentTime = 0;
  });

var vol = document.getElementById('slider');
var output = document.getElementById('volume');
output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}
var setVolume = function(){
      vid.volume = this.value / 100;
};
  
vol.addEventListener('change',setVolume);
vol.addEventListener('input',setVolume);


