import React from 'react';
class LoginPage extends React.Component {
	state = {};
	render() {
		return (
			<>
				<div className='container'>
					<h1>Login Page</h1>
				</div>

				<div className='form-group'>
					<label htmlFor='exampleInputEmail1'>Nazwa użytkownika</label>
					<input
						type='email'
						className='form-control'
						placeholder='Twoja nazwa'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='exampleInputPassword1'>Hasło</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
					/>
					<small className='form-text text-muted'>
						UWAGA! Hasła nie są zaszyfrowane! Nie podawaj prawdziwych haseł
					</small>
				</div>
			</>
		);
	}
}

export default LoginPage;
