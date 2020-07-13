import React from 'react';

class Nav extends React.Component {
	state = {};
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarColor01'>
					<ul className='navbar-nav mr-auto'>
						{/* <li className='nav-item'>
							<a className='nav-link' href='/'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li> */}
						<li className='nav-item'>
							<a className='nav-link' href='/todo'>
								Todo
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/register'>
								Register
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/login'>
								Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Nav;
