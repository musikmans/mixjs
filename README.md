# Welcome to MixJS

This is a Javascript mixer that allows you to mix your music from your browser. As an electronic music enthusiastic, I wanted to create some that combine my love of music and programming. This is why I create MixJS

# Tech

Build with React JS and Redux. The music tool is wavesurfer.js

# Adding a track. 

Just slide an MP3 on the center of the vinyl disc and they will be added to the track. Please note the vinyl will spin while the music play but you can't use them to do scratching or moving forward in the track. For this, you can use the controls or the music waveform. 

# Controls

You can use the same controllers that you will find on any tape deck to play, fast-forward, rewind, stop and eject the track. Ejecting the track will remove the track and clear some computer memory.

Under the standard controls, you have the loop set in bars (the bars time estimate is calculated based on a 4/4 tempo of electronic music genre and the BPM of the music track). If you try to mix something with a different tempo (like Salsa music), it might not work right for you. You can use the loop only when the music plays.

# Effects

Each track includes 5 possibles effects. A delay, a distortion effect, a panning effect, a low pass and a high-pass filter. 

The delay will delay some elements for a few tenths of a second. The distortion will add some distortion on the bass (good if you love hardstyle music), panning will move the track either to the left or to the right. A low-pass filter will eliminate the sound below a certain frequency and High-pass filter eliminates the sound above it.

Please note that you can use only one effect at the time per track to limit the load the effects are taking.

# Cross-fader

The cross-fader allow you to switch the music from one track or the other. By default, the mixer is at the center so both tracks will have the same volume. Move the fader to the left or to the right to position the volume accordingly. There is no master volume control on the mixer. To change the main volume, you need to use your sound card output.

# Tempo

You can use a cross-fader style to adjust the tempo of the music. If the fader is in the + area, the music will play faster. If the fader is in the minus area, the music will be slower.

# Credits

This project is built on Wavesurfer.js (https://github.com/katspaugh/wavesurfer.js). Thanks for katspaugh for creating an awesome project that made MixJS possible.

# License

MIT