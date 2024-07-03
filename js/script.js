/* This is all the JS used and it does only 2 things: */

/* 1. datalist option render support test (for support info box) */
addEventListener("load", (e) => {
	if (+document.querySelector("option").getBoundingClientRect().width) document.body.style.setProperty("--list", "none");
});

/* 2. update the --val custom property on dragging slider thumb */
addEventListener("input", (e) => {
	let _t = e.target;
	_t.parentNode.style.setProperty("--val", +_t.value);
});

/* Absolutely no JS is needed for creating the look of the slider. */
