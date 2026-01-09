import { login } from "../utils/storage";

export default function Login() {
  return (
    <div className="center">
      <h2>Login</h2>
      <button onClick={() => { login(); window.location="/dashboard"; }}>
        Login
      </button>
    </div>
  );
}
