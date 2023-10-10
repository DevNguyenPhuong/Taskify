import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

function Signup() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-[3.2rem]  bg-gray-100">
      <Logo />
      <h4 className="text-center text-[3rem] font-[600]">
        Sign up a new account
      </h4>
      <SignupForm />
    </main>
  );
}

export default Signup;
