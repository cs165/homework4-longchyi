// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
	constructor() {
		// TODO(you): Implement the constructor and add fields as necessary.
		this.menuScreen = new MenuScreen(document.querySelector('#menu'))
		this.musicScreen = new MusicScreen(document.querySelector('#musicBox'));
		document.addEventListener('submitForm', (event) => {
			this.menuScreen.hide();
			document.dispatchEvent(new CustomEvent('openMusicPage', { detail: event.detail }));
		});
	}
	// TODO(you): Add methods as necessary.
}
