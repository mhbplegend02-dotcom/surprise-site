const correctPassword = "love";

// PASSWORD SCREEN
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("intro").classList.remove("hidden");
  } else {
    alert("Try again 🤍");
  }
}

// START EXPERIENCE
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  startHearts();
  loadMedia();
}

// FINAL SCREEN
function showFinal() {
  document.getElementById("content").style.display = "none";
  document.getElementById("finalScreen").classList.remove("hidden");
}

// OVERLAY
function openImage(src) {
  const overlay = document.getElementById('overlay');
  const img = document.getElementById('overlayImg');
  const video = document.getElementById('overlayVideo');

  video.style.display = "none";
  img.style.display = "block";
  img.src = src;

  overlay.style.display = "flex";
}

function openVideo(src) {
  const overlay = document.getElementById('overlay');
  const img = document.getElementById('overlayImg');
  const video = document.getElementById('overlayVideo');

  img.style.display = "none";
  video.style.display = "block";
  video.src = src;
  video.play();

  overlay.style.display = "flex";
}

function closeOverlay() {
  const overlay = document.getElementById('overlay');
  const video = document.getElementById('overlayVideo');
  video.pause();
  overlay.style.display = "none";
}

// HEARTS
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// LOAD MEDIA AUTOMATICALLY (ZERO NODE)
function loadMedia() {
  const gallery = document.getElementById('gallery');
  const videoGallery = document.getElementById('videoGallery');

  // Add your photo/video filenames here
  const photos = ["photo1.jpg", "photo2.jpg"];
  const videos = ["video1.mp4"];

  photos.forEach(p => {
    const img = document.createElement('img');
    img.src = 'photos/' + p;
    img.onclick = () => openImage(img.src);
    gallery.appendChild(img);
  });

  videos.forEach(v => {
    const vid = document.createElement('video');
    vid.src = 'videos/' + v;
    vid.onclick = () => openVideo(vid.src);
    videoGallery.appendChild(vid);
  });
}