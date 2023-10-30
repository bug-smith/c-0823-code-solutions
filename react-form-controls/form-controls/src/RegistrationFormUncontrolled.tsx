import type { FormEvent } from 'react';

export default function RegistrationFormuncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" name="username" />
      </label>
      <label>
        Password: <input type="text" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
