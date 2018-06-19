'use strict';
class validateForm {
	constructor() {
		this.errMsg = 'Please enter a value';
		const dataLength = 'data-length';
		const dataValidate = 'data-validate';
		this.currEl = document.querySelector('[data-validate]');
		this.elAttr = this.currEl.getAttribute(dataValidate);
		this.maxLenAttr = this.currEl.getAttribute(dataLength);
	}
	patternMatch(pattern) {
		if (this.currEl.value.length <= parseInt(this.maxLenAttr)) {
			this.currEl.value = this.currEl.value.replace(pattern, '');
		} else {
			this.currEl.value = this.currEl.value.slice(0, parseInt(this.maxLenAttr));
		}
	}
	formDataValidate() {
		if (this.elAttr || this.maxLenAttr) {
			switch (this.elAttr) {
				case 'alpha': this.patternMatch(/[^a-zA-Z]/); break;
				case 'numeric': this.patternMatch(/[^\d]/); break;
				case 'alphanumeric': this.patternMatch(/[^a-z0-9 ]/i); break;
				case 'nospl': this.patternMatch(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/); break;
				case 'email': this.patternMatch(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/); break;
				default: break;
			}
		}
	}
	static removeErrMessage() {
		const currEl = document.querySelector('[data-validate]');
		const elements = currEl.parentNode.getElementsByClassName('text-helper');
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0]);
		}
	}
}

document.querySelector('[data-validate]').addEventListener('focus', function () {
	validateForm.removeErrMessage();
});
document.querySelector('[data-validate]').addEventListener('input', function () {
	const data = new validateForm();
	data.formDataValidate();
});