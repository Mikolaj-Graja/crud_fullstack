import React from 'react';
import axios from 'axios';
class RegisterPage extends React.Component {
	state = { userName: '', password: '' };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitUserRegistration = (e) => {
		e.preventDefault();
		if (!this.state.userName) alert('no userName');
		else if (!this.state.password) alert('no password');
		else {
			const newUser = {
				userName: this.state.userName,
				password: this.state.password,
			};
			axios
				.post('http://localhost:3009/registerUser', newUser)
				.then(this.setState({ userName: '', password: '' }));
			// .then(window.location.reload());
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
					<input
						type='password'
						name='password'
						placeholder='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button type='submit'>register</button>
				</form>
			</div>
		);
	}
}

export default RegisterPage;
