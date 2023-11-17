import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form
      className="overflow-hidden border border-solid border-gray-200 bg-gray-50 px-2 py-16 text-[1rem] md:px-10 md:text-[1.4rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="New Password" error={errors?.password?.message}>
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "New Password needs a minimum of 8 chars",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <button
          onClick={reset}
          type="reset"
          className="rounded-lg border border-solid border-gray-200 bg-gray-50 px-5 py-5 text-[1rem] font-[500]  text-gray-600 hover:bg-gray-100 md:text-[1.4rem]"
        >
          Cancel
        </button>
        <button
          className=" rounded-lg bg-indigo-600 px-5 py-5 text-[1rem] font-[500]  text-indigo-50 hover:bg-indigo-700 md:text-[1.4rem]"
          disabled={isUpdating}
        >
          Update password
        </button>
      </FormRow>
    </form>
  );
}

export default UpdatePasswordForm;
