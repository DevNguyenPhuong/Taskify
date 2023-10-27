import { useState } from "react";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin, useLoginWithGit } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("ayesha@ayesha.com");
  const [password, setPassword] = useState("ayesha1234");

  const { login, isLoading } = useLogin();
  const { loginWithGit, isLoadingGitLogin } = useLoginWithGit();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  function handleLoginWithGit(e) {
    e.preventDefault();
    loginWithGit();
  }

  function handleSinup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-md border border-solid border-gray-200 bg-gray-50 px-10 py-16 text-[1.4rem]"
    >
      <FormRowVertical label="Email address">
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-3 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-3 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <button
          className="flex flex-col items-center bg-indigo-600 px-10 py-5 text-[1.6rem] font-medium text-indigo-50 hover:bg-indigo-500"
          disabled={isLoading}
        >
          {!isLoading ? "Login" : <SpinnerMini />}
        </button>
      </FormRowVertical>

      <FormRowVertical>
        <button
          className="flex flex-col items-center bg-gray-800 px-10 py-5 text-[1.6rem] font-medium text-indigo-50 hover:bg-gray-900"
          disabled={isLoadingGitLogin}
          onClick={handleLoginWithGit}
        >
          {!isLoading ? "Login with github" : <SpinnerMini />}
        </button>
      </FormRowVertical>

      <FormRowVertical>
        <button
          className="flex flex-col items-center bg-indigo-100 px-10 py-5 text-[1.6rem] font-medium text-indigo-700 hover:bg-indigo-200"
          disabled={isLoading}
          onClick={handleSinup}
        >
          Sign up
        </button>
      </FormRowVertical>
    </form>
  );
}

export default LoginForm;
