const messageElem = document.querySelector('.message');
const changeTextButtonElem = document.querySelector('.changeTextButton');

messageElem.innerText = 'this is from javascript';
changeTextButtonElem.addEventListener('click', () => {
	messageElem.innerText = 'TEXT WAS CHANGED';
});