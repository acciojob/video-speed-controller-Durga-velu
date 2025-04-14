const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




   const video=document.querySelector(".player__video")

   const playButton=document.querySelector("#play-btn")
   const playBackSpeed=document.querySelector("#playbackSpeed")
const volume = document.querySelector("#volume");
const rewindBtn = document.querySelector("#rewindBtn");
const skipBtn = document.querySelector("#skipBtn");
const progressBar = document.querySelector("#progress__filled");
const speedBar = document.querySelector(".speed-bar");

playButton.addEventListener(("click"),(e)=>{
    if(video.paused){
        video.play();
        e.target.textContent = "❚ ❚"
    }
    else{
        video.pause()
        e.target.textContent= "►"
    }
})


playBackSpeed.addEventListener("input", (e) => {
    video.playbackRate = parseFloat(e.target.value);
    speedBar.textContent = `${e.target.value}`;
  });
  

volume.addEventListener("input", (e) => {
    video.volume = e.target.value / 10;
  });

rewindBtn.addEventListener("click", () => {
    video.currentTime -= 0.05;
});

skipBtn.addEventListener("click", () => {
    video.currentTime += 0.25;
});

video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
  });











