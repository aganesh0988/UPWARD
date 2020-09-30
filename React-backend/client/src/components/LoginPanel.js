// import React from 'react';
// import { connect } from 'react-redux';
// import { actions, thunks } from '../store/auth';

// const LoginForm = props =>
//   <form>
//     <div>
//       <input onChange={props.updateEmailValue} type="email" placeholder="Email" required />
//     </div>
//     <div>
//       <input onChange={props.updatePasswordValue} type="password" placeholder="Password" required />
//     </div>
//     <div>
//       <button onClick={props.tryLogin}>Log in</button>
//     </div>
//   </form>
//   ;

// const mapStateToProps = state => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
//     updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
//     tryLogin: (event) => {
//       event.preventDefault();
//       dispatch(thunks.tryLogin());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


import React, { useState, useContext } from 'react';
//import { Redirect } from 'react-router-dom';
//import { baseUrl } from ‘./config’;
import { UserContext } from './UserContext';
const LoginPanel = (props) => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      const { token } = await response.json();
      login(token);
      props.history.push('/');// CHANGE TO REDIRECT TO PRODUCTS
    }
  };
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  return (
    <main className='centered middled'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' value={email} onChange={updateEmail} />
        <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
        <button type='submit'>Login</button>
      </form>
    </main>
  );
};
export default LoginPanel;
