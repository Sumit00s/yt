let menubtn = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.side-bar');
let videoContainer = document.querySelector('.video-container');

menubtn.onclick = function(){
    sidebar.classList.toggle('resize-sidebar');
    videoContainer.classList.toggle('widen-video-container')
}
