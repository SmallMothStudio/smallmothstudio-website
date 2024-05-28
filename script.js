// script.js

const twitchChannel = "smallmothstudio";

new Twitch.Embed("twitch-embed", {
    width: 600,
    height: 480,
    channel: twitchChannel,
    layout: "video-with-chat",
});
