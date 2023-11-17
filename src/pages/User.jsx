import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function User() {
  return (
    <>
      <h1 className="text-center text-[1.5rem] font-semibold text-indigo-600 md:text-[3rem]">
        Update your account
      </h1>

      <div>
        <h3 className="mt-10 text-[1.2rem] font-medium text-indigo-500 md:text-[2rem]">
          Update user data
        </h3>
        <UpdateUserDataForm />
      </div>

      <div>
        <h3 className="mt-10 text-[1.2rem]  font-medium text-indigo-500 md:text-[2rem]">
          Update password
        </h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default User;
