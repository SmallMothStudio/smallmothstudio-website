// script.js

// Existing Twitch embed code
const twitchChannel = "smallmothstudio";

new Twitch.Embed("twitch-embed", {
    width: 600,
    height: 480,
    channel: twitchChannel,
    layout: "video-with-chat",
});

// New section visibility code
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});
