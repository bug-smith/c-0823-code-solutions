import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState();
  const [isValid, setValid] = useState(false);
  const [validationMessage, setValidationM] = useState('');

  const validatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length === 0) {
      setValid(false);
      setValidationM(`A password is required`);
    } else if (newPassword.length < 8) {
      setValid(false);
      setValidationM('Your password is too short');
    } else {
      setValid(true);
      setValidationM('');
    }
  };

  const validationClass = isValid ? 'is-valid' : 'is-invalid';
  return (
    <div className="form-group position-relative m-5">
      <label>
        <input
          value={password ?? ''}
          type="password"
          placeholder="Enter Password"
          onChange={validatePassword}
          className={`form-control ${validationClass}`}
        />
      </label>
      {validationMessage}
    </div>
  );
}
