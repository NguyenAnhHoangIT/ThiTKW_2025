let now_playing = document.querySelector('.now-playing');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');

// ✅ Use existing audio tag
let curr_track = document.getElementById('audio-player');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name : 'Mẹ yêu con',
        artist : 'Nhà tinh hoa (ATVNCG)',
        music : './sound/meyeucon.MP3'
    },
    {
        name : 'MỘT VÒNG VIỆT NAM',
        artist : 'Tùng Dương',
        music : './sound/motvongvietnam.MP3'
    },
    {
        name : 'Mashup Đất việt tiếng vọng ngàn đời, Hào khí Việt Nam',
        artist : 'TLong',
        music : './sound/mashupdatviet_hoakhi.mp3'
    }
];

loadTrack(track_index);

function loadTrack(index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[index].music;
    curr_track.load();

    track_name.textContent = music_list[index].name;
    track_artist.textContent = music_list[index].artist;
    now_playing.textContent = "Đang phát " + (index + 1) + " / " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}

function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack(){
    loadTrack(track_index);
    playTrack();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle"></i>';
}

function nextTrack(){
    if (isRandom) {
        let random_index = Math.floor(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = (track_index + 1) % music_list.length;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    track_index = (track_index - 1 + music_list.length) % music_list.length;
    loadTrack(track_index);
    playTrack();
}

function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setUpdate(){
    if (!isNaN(curr_track.duration)) {
        let seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime % 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration % 60);

        if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
        if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
        if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
        if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

        curr_time.textContent = `${currentMinutes}:${currentSeconds}`;
        total_duration.textContent = `${durationMinutes}:${durationSeconds}`;
    }
}
