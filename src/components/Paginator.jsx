import React from 'react';

const Paginator = (props) => {
	const prevButton = () => {
		if(props.prev){
			return (
				<button onClick={ props.onClick } name='-'>
					pre
				</button>
			)
		} else {
			return null;
		}
	}
	const nextButton = () => {
		if(props.next){
			return (
				<button onClick={ props.onClick } name='+'>
					next
				</button>
			)
		}else {
			return null;
		}
	}

	return (
		<div>
			{ prevButton() }
			<button>
				{ props.curr }
			</button>
			{ nextButton() }
		</div>
	)
}

export default Paginator;