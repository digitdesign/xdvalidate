'use strict';
class validateForm {
	constructor() {
		this.errMsg = 'Please enter a value';
		const dataLength = 'data-length';
		const dataValidate = 'data-validate';
		this.currEl = document.querySelector('[data-validate]');
		this.elAttr = this.currEl.getAttribute(dataValidate);
	}
	patternMatch(pattern) {
		if (this.currEl.value.length <= this.maxLenAttr) {
			this.currEl.value = this.currEl.value.replace(pattern, '');
		} else {
			this.currEl.value = this.currEl.value.slice(0, parseInt(this.maxLenAttr));
		}
	}
	formDataValidate() {
		if (this.elAttr || this.maxLenAttr) {
			switch (this.elAttr) {
				case 'alpha':
					this.maxLenAttr = 1024;
					this.patternMatch(/[^a-zA-Z\s]/);
					break;
				case 'numeric':
					this.maxLenAttr = 256;
					this.patternMatch(/[^0-9]/);
					break;
				case 'alphanumeric':
					this.maxLenAttr = 1024;
					this.patternMatch(/[^a-zA-Z0-9\s]/i);
					break;
				case 'nospl':
					this.maxLenAttr = 256;
					this.patternMatch(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/);
					break;
				case 'name':
					this.maxLenAttr = 128;
					this.patternMatch(/[^a-zA-Z\s.’]/);
					break;
				case 'first-name':
					this.maxLenAttr = 32;
					this.patternMatch(/[^a-zA-Z.]/);
					break;
				case 'middle-name':
					this.maxLenAttr = 32;
					this.patternMatch(/[^a-zA-Z.’]/);
					break;
				case 'last-name':
					this.maxLenAttr = 32;
					this.patternMatch(/[^a-zA-Z.’]/);
					break;
				case 'email':
					this.maxLenAttr = 254;
					this.patternMatch(/[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~@]/);
					break;
				case 'username':
					this.maxLenAttr = 64;
					this.patternMatch(/[^a-z0-9]/);
					break;
				case 'tel':
					this.maxLenAttr = 10;
					this.patternMatch(/[^0-9]/);
					break;
				case 'search':
					this.maxLenAttr = 64;
					this.patternMatch(/[^a-zA-z0-9]/);
					break;
				case 'password':
					this.maxLenAttr = 128;
					this.patternMatch(/[^0-9\s\w]/);
					break;
				case 'organization':
					this.maxLenAttr = 128;
					this.patternMatch(/[^a-zA-Z0-9\s]/);
					break;
				case 'address':
					this.maxLenAttr = 1024;
					this.patternMatch(/[^a-zA-Z0-9#.\s]/);
					break;
				case 'city':
					this.maxLenAttr = 128;
					this.patternMatch(/[^a-zA-Z]/);
					break;
				case 'country':
					this.maxLenAttr = 128;
					this.patternMatch(/[^a-zA-Z0-9]/);
					break;
				case 'pan-number':
					this.maxLenAttr = 10;
					this.patternMatch(/[^A-Z0-9]/);
					break;
				case 'aadhar-number':
					this.maxLenAttr = 16;
					this.patternMatch(/[^0-9]/);
					break;
				case 'postal-code':
					this.maxLenAttr = 6;
					this.patternMatch(/[^0-9]/);
					break;
				case 'cc-name':
					this.maxLenAttr = 128;
					this.patternMatch(/[^a-zA-Z\s.’]/);
					break;
				case 'cc-number':
					this.maxLenAttr = 16;
					this.patternMatch(/[^0-9]/);
					break;
				case 'cc-cvv':
					this.maxLenAttr = 3;
					this.patternMatch(/[^0-9]/);
					break;
				case 'amount':
					this.maxLenAttr = 64;
					this.patternMatch(/[^0-9]/);
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