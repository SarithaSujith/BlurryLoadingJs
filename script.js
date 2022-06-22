const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0; // initialising it to 0

let int = setInterval(blurring, 30); //intialising the blur every 30 milisecond
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int); // it stops at 100 in console check the load
	}

	loadText.textContent = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0); // it has to go to 1 to 0 as we need the build first and then blur // that is load 0 to 100 and opacity 1 to 0
	// console.log(load)
	bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
