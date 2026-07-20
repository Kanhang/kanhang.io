
let count = 1;
const airplaneVideo = document.getElementById('airplaneVideo');
const blockchainVideo = document.getElementById('blockchainVideo');
const globeVideo = document.getElementById('spinningGlobe');
const src = document.getElementById('videoSrc');

function videoCount() {
    airplaneVideo.style.visibility='hidden';
    airplaneVideo.classList.remove("playing");
    setTimeout(()=> {
        if (count < 3) {
            count ++;
         } else {
             count = 1;
         }
         console.log('videos/airplane_'+count+'.webm')
         src.setAttribute('src','videos/airplane_'+count+'.webm' );
         airplaneVideo.load();
         airplaneVideo.style.visibility='visible';
         airplaneVideo.play();
    }, 500)
}


function loadVideo(video) {
    video.addEventListener("play", () => {
        video.classList.add("playing");
        video.onmousemove = (e) => {

            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
        
            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)
            
        }
      });

}

loadVideo(airplaneVideo);
loadVideo(blockchainVideo);
loadVideo(globeVideo);
// airplaneVideo.addEventListener("play", () => {
//     airplaneVideo.classList.add("playing");
//   });

//   document.querySelector('#airplaneVideo').onmousemove = (e) => {

// 	const x = e.pageX - e.target.offsetLeft
// 	const y = e.pageY - e.target.offsetTop

// 	e.target.style.setProperty('--x', `${ x }px`)
// 	e.target.style.setProperty('--y', `${ y }px`)
	
// }
// video.oncanplaythrough = function() {
// if (count === 1) {
    
//     setTimeout(function() {     
//         video.classList.remove('video-animate10S');
//         video.classList.add('video-animate5S');
//     }, 10500);
// } else {
   
//     setTimeout(function() {       
//         video.classList.remove('video-animate5S');
//         video.classList.add('video-animate10S');
//     }, 5500);
// }
// };

