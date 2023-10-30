import { useState } from 'react';

export default function RegistrationFormcontrolled() {
  const [username, isUsername] = useState('');
  const [password, isPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => isUsername(e.target.value)}
        />
      </label>
      <label>
        Password:{' '}
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => isPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
