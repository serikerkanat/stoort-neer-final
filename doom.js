//Это для выбора и манипуляции элементами у нас
document.querySelectorAll('.rating-star').forEach((star, index) => {
    star.addEventListener('click', () => {
        document.querySelectorAll('.rating-star').forEach((s, i) => {
            s.style.color = i <= index ? 'gold' : 'gray';
        });
    });
});
//Это чтобы изменять стили(там еще код с найт есть в ссс файле)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('night-theme');
    
    // Сохранение темы в localStorage
    if (document.body.classList.contains('night-theme')) {
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'day');
    }
});

// Установка темы при загрузке страницы
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-theme');
    }
});
//манипулятор атрибутами
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', () => {
        document.getElementById('main-image').src = thumb.src;
    });
});


const youtubeApiKey = 'AIzaSyCUOHLMF-C38Jo03p0sgvi8glK5InfpgLI';  // Замените на ваш API ключ
const channelId = 'UC-COWIm1ZSTTi7zYz71kfsw';  // Замените на ID вашего канала

fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${channelId}&order=date&part=snippet&type=video`)
    .then(response => response.json())
    .then(data => {
        const videos = data.items;
        const videoList = document.getElementById('video-list');
        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                    <img src="${video.snippet.thumbnails.default.url}" alt="${video.snippet.title}">
                    <p>${video.snippet.title}</p>
                </a>
            `;
            videoList.appendChild(videoElement);
        });
    })
    .catch(error => {
        console.error('Error fetching YouTube data:', error);
    });
