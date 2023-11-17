import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

function Signup() {
  return (
    <main className="grid min-h-screen grid-cols-[32rem] content-center justify-center gap-[3.2rem] bg-gray-100  md:grid-cols-[48rem]">
      <Logo />
      <h4 className="text-center text-[2rem] font-[600] md:text-[3rem]">
        Sign up a new account
      </h4>
      <SignupForm />
    </main>
  );
}

export default Signup;
