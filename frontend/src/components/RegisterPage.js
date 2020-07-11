import React from 'react';
import axios from 'axios';
class RegisterPage extends React.Component {
	state = { userName: '' };

	handleChange = (e) => {
		this.setState({ userName: e.target.value });
	};

	submitUserRegistration = (e) => {
		e.preventDefault();
		if (!this.state.userName) alert('no userName');
		else {
			axios
				.post('http://localhost:3009/registerUser', this.state)
				.then(this.setState({ userName: '' }))
				.then(window.location.reload());
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitUserRegistration}>
					<input
						type='text'
						name='userName'
						placeholder='username'
						value={this.state.userName}
						onChange={this.handleChange}
					/>
					<button type='submit'>register</button>
				</form>
			</div>
		);
	}
}

export default RegisterPage;
