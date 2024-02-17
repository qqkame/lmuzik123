module.exports = {
        px: '!',
        playing: 'discord.gg/dcbotser',
        messageColor:'#FF6347',

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']
        },
        maxVol: 5050,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
