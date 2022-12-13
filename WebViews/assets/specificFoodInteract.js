const hider = document.querySelectorAll('.hidden');
const updateLink = document.querySelector('#update');
const updateForm = document.querySelector('#updateForm');
let toggle = 0;
hider.forEach((element) => {
	hideData(element);
});

function hideData(element) {
	element.classList.add('hiddenItem');
}
function showData(element) {
	element.classList.remove('hiddenItem');
}
updateLink.addEventListener('click', () => {
	if (toggle == 0) {
		showData(updateForm);
		toggle = 1;
	} else if (toggle == 1) {
		hideData(updateForm);
		toggle = 0;
	}
});
