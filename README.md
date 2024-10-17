# MusicPerspective

This web application allows users to listen to music with an immersive 3D sound experience, controlled by their smartphone's gyroscope.

> [!NOTE]  
> The is the early version of the app

## How to Use

1. **Run an HTTP server:** Run an HTTP server. Notice that your browser may require HTTPS in order to enable gyroscope. Running server on `localhost` also works.
2. **Access the Web Application:** Open the website on your smartphone's web browser.
3. **Play music:** Wear stereo headphones and tap "Play all".
4. **Move:** Keep the phone in your hands and slowly spin around yourself. Make sure that the orientation of your head always matches the phone's one. 

## Technology Stack

- **HTML, JavaScript:** The foundation of the web application.
- **Web Audio API:** Used to manipulate and spatialize audio.
- **Device Orientation Events:** Accesses the gyroscope sensor for controlling the soundstage.
