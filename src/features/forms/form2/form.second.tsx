import { useState } from "react";
import "../../forms/forms.scss";

export type FormSecondProps = {
  username: string;
  password: string;
  repeatPassword: string;
  accountType: string;
};
const onSubmit: any = [];
export function FormSecond() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleRepeatPasswordChange = (event: any) => {
    setRepeatPassword(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleAccountTypeChange = (event: any) => {
    setAccountType(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      console.log("error");
    }
    onSubmit(username, password, repeatPassword, accountType);
  };

  return (
    <>
      <h2>Confirmación</h2>
      <form onSubmit={onSubmit} className="forms">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Repeat password:
          <input
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
        </label>
        <label>
          Account type:
          <select value={accountType} onChange={handleAccountTypeChange}>
            <option value="personal">personal</option>
            <option value="pro">pro</option>
            <option value="business">business</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
