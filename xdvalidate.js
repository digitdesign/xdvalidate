'use strict';
class validateForm {
	constructor() {
		const dataValidate = 'data-validate';
		this.currEl = document.querySelector('[data-validate]');
		this.elAttr = this.currEl.getAttribute(dataValidate);
	}
	patternMatch(pattern, maxLenAttr) {
		if (this.currEl.value.length <= parseInt(maxLenAttr)) {
			this.currEl.value = this.currEl.value.replace(pattern, '');
		} else {
			this.currEl.value = this.currEl.value.slice(0, parseInt(maxLenAttr));
		}
	}
	formDataValidate() {
		if (this.elAttr) {
			switch (this.elAttr) {
				case 'alpha':
					this.patternMatch(/[^a-zA-Z\s]/, 1024);
					break;
				case 'numeric':
					this.patternMatch(/[^0-9]/, 256);
					break;
				case 'alphanumeric':
					this.patternMatch(/[^a-zA-Z0-9\s]/i, 1024);
					break;
				case 'no-special':
					this.patternMatch(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/, 256);
					break;
				case 'name':
					this.patternMatch(/[^a-zA-Z\s.’]/, 128);
					break;
				case 'first-name':
					this.patternMatch(/[^a-zA-Z.]/, 32);
					break;
				case 'middle-name':
					this.patternMatch(/[^a-zA-Z.’]/, 32);
					break;
				case 'last-name':
					this.patternMatch(/[^a-zA-Z.’]/, 32);
					break;
				case 'email':
					this.patternMatch(/[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~@]/, 254);
					break;
				case 'username':
					this.patternMatch(/[^a-z0-9]/, 64);
					break;
				case 'tel':
					this.patternMatch(/[^0-9]/, 10);
					break;
				case 'search':
					this.patternMatch(/[^a-zA-z0-9]/, 64);
					break;
				case 'password':
					this.patternMatch(/[^0-9\s\w]/, 128);
					break;
				case 'organization':
					this.patternMatch(/[^a-zA-Z0-9\s]/, 128);
					break;
				case 'address':
					this.patternMatch(/[^a-zA-Z0-9#.\s]/, 1024);
					break;
				case 'city':
					this.patternMatch(/[^a-zA-Z]/, 128);
					break;
				case 'country':
					this.patternMatch(/[^a-zA-Z0-9]/, 128);
					break;
				case 'pan-number':
					this.patternMatch(/[^A-Z0-9]/, 10);
					break;
				case 'aadhar-number':
					this.patternMatch(/[^0-9]/, 16);
					break;
				case 'postal-code':
					this.patternMatch(/[^0-9]/, 6);
					break;
				case 'cc-name':
					this.patternMatch(/[^a-zA-Z\s.’]/, 128);
					break;
				case 'cc-number':
					this.patternMatch(/[^0-9]/, 16);
					break;
				case 'cc-cvv':
					this.patternMatch(/[^0-9]/, 3);
					break;
				case 'amount':
					this.patternMatch(/[^0-9]/, 64);
					break;
				default:
					break;
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