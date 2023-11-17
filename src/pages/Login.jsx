import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[32rem] content-center justify-center gap-[3.2rem] bg-gray-100  md:grid-cols-[48rem]">
      <Logo />
      <h4 className="text-center text-[1.6rem] font-[600] md:text-[3rem]">
        Log in to your account
      </h4>
      <LoginForm />
    </main>
  );
}

export default Login;
