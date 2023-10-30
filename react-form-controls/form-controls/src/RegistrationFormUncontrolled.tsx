export default function RegistrationFormuncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username, password } = Object.fromEntries(formData.entries());
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
