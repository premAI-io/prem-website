export function scrollToY(targetY = 0) {
	window.scrollTo({
		top: targetY,
		behavior: "smooth",
	});
}

export default function scrollTo(target, offset = 0) {
	const box = target.getBoundingClientRect();
	const scrollTop =
		(window.scrollY || document.documentElement.scrollTop) + box.top - offset;

	scrollToY(scrollTop);
}
