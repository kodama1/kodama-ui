const Accordion = (textSize:{},textColor:{},textColorDarkMode:{},) => {
	// Accordion example #1 https://preline.co/docs/accordion.html

	return (
		<div className='hs-accordion-group'>
			<div className='hs-accordion active' id='hs-basic-heading-one'>
				<button
					name='Accordion #1'
					className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400'
					aria-controls='hs-basic-collapse-one'>
					<svg
						className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
						<path
							d='M8.12421 13.36V2.35999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					<svg
						className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					Accordion #1
				</button>
				<div
					id='hs-basic-collapse-one'
					className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
					aria-labelledby='hs-basic-heading-one'>
					<div className='pb-4 px-6'>
						<p className={`${textSize} ${textColor} dark:${textColorDarkMode}`}>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
						</p>
					</div>
				</div>
			</div>

			<div className='hs-accordion' id='hs-basic-heading-two'>
				<button
					className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400'
					aria-controls='hs-basic-collapse-two'>
					<svg
						className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
						<path
							d='M8.12421 13.36V2.35999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					<svg
						className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					Accordion #2
				</button>
				<div
					id='hs-basic-collapse-two'
					className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
					aria-labelledby='hs-basic-heading-two'>
					<div className='pb-4 px-6'>
					<p className={`${textSize} ${textColor} dark:${textColorDarkMode}`}>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
						</p>
					</div>
				</div>
			</div>

			<div className='hs-accordion' id='hs-basic-heading-three'>
				<button
					className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400'
					aria-controls='hs-basic-collapse-three'>
					<svg
						className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
						<path
							d='M8.12421 13.36V2.35999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					<svg
						className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.62421 7.86L13.6242 7.85999'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					Accordion #3
				</button>
				<div
					id='hs-basic-collapse-three'
					className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
					aria-labelledby='hs-basic-heading-three'>
					<div className='pb-4 px-6'>
					<p className={`${textSize} ${textColor} dark:${textColorDarkMode}`}>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export {Accordion};
