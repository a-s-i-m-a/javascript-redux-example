const DialogMessage = ({ message, time, answer, file, url, image }) => {
	return (
		<div
			className={`
				message
				px-2
				leading-5
				font-light
				rounded-xl
				mb-2
				animate-fade-in-down
				${answer ? 'rounded-tr-none' : 'rounded-tl-none'}
				${answer ? 'bg-gray-200' : 'bg-button-blue-color'}
				${!answer ? 'text-white' : null}
				${answer ? 'w-auto' : null}
				${answer ? 'self-end' : null}
			`}
      >
			<div className="flex items-center pt-2">
				{ file ?
					<a  target="_blank" className="flex items-center" href={url} rel="noreferrer">
						<span className="mr-2 rounded-full bg-white px-1 py-1">
          <svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="gray"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
            <path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
          </svg>
        </span>
						{ message }
					</a>
					:
					image ?
						<div className="flex items-center pt-2">
							<img src={url} className="w-32"  alt=""/>
						</div>
					: <span>{ message }</span>
				}
			</div>
			<div className="flex justify-end mb-2">
				<small> { time } </small>
			</div>
		</div>
	);
};
export default DialogMessage;
