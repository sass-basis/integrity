'use strict';

export default class BasisFixedHeader {
	constructor(container, params) {
		if (!container) {
			container = '._l-container';
		}
		this.params = Object.assign({
			'header'   : '._l-header',
			'className': '_l-header--is-scrolled'
		}, params);

		this.container = document.querySelector(container);
		this.header    = document.querySelector(this.params.header);
		this.setListener();
	}

	setListener() {
		this.container.addEventListener('scroll', (event) => {
			const scroll = container.scrollTop;
			if (scroll > 0) {
				this.header.classList.add(this.params.className);
			} else {
				this.header.classList.remove(this.params.className);
			}
		}, false);
	}
}
