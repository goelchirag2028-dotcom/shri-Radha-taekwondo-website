const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
	menuToggle.addEventListener('click', () => {
		const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!isExpanded));
		navLinks.classList.toggle('is-open', !isExpanded);
	});

	navLinks.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			menuToggle.setAttribute('aria-expanded', 'false');
			navLinks.classList.remove('is-open');
		}
	});
}

const currentYear = document.querySelector('#current-year');
if (currentYear) {
	currentYear.textContent = new Date().getFullYear();
}

const callButton = document.querySelector('#home .home-content .btn a');
if (callButton) {
	callButton.addEventListener('click', (event) => {
		event.preventDefault();
		window.location.href = 'tel:+918295399927';
	});
}

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
