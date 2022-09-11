import React, { useEffect, useRef } from "react";

function Card(props) {
	const imgRef = useRef();

	useEffect(() => {
		const options = {};
		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const target = entry.target;
					const previousEl = target.previousSibling;
					console.log("is Intersecting");
					target.src = target.dataset.src;
					previousEl.srcset = previousEl.dataset.src;
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(imgRef.current);
	}, []);

	return (
		<div className='Card text-center'>
			<picture>
				<source data-src={props.webp} srcSet={props.webp} type='image/webp' />
				<img ref={imgRef} data-src={props.image} />
			</picture>
			<div className='p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all'>
				{props.children}
			</div>
		</div>
	);
}

export default Card;
