import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import FormRowVertical from "../../ui/FormRowVertical";
import { useNavigate } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-md border border-solid border-gray-200 bg-gray-50 px-10 py-16 text-[1.4rem]"
    >
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minunum of8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
          className="rounded-lg border border-solid border-gray-200 bg-gray-50 px-5 py-5 text-[1.4rem] font-[500] text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          className="flex flex-col items-center bg-indigo-600 px-10 py-5 text-[1.6rem] font-medium text-indigo-50 hover:bg-indigo-500"
          disabled={isLoading}
        >
          Create an account
        </button>

        <button
          className="flex flex-col items-center bg-indigo-100 px-10 py-5 text-[1.6rem] font-medium text-indigo-700 hover:bg-indigo-200"
          disabled={isLoading}
          onClick={() => navigate(-1)}
        >
          Back to login
        </button>
      </FormRowVertical>
    </form>
  );
}

export default SignupForm;
