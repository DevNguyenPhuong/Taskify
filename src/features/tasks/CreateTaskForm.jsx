import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useUser } from "../authentication/useUser";
import { useCreateTask } from "./useCreateTask";

function CreateTaskForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { user } = useUser();
  const { errors } = formState;

  const { isCreating, createTask } = useCreateTask(onCloseModal, reset);

  function onSubmit(data) {
    createTask({
      ...data,
      user: user.id,
    });
  }

  return (
    <form
      className="w-20rem flex flex-col gap-6 overflow-hidden rounded-md  bg-gray-50 px-10 py-16 text-[1.4rem] md:w-[70rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Task name" error={errors?.task?.message}>
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="text"
          id="task"
          disabled={isCreating}
          {...register("task", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Duration (minutes)" error={errors?.duration?.message}>
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="number"
          id="duration"
          disabled={isCreating}
          {...register("duration", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Duration at least 1 minutes",
            },
            max: {
              value: 1440,
              message: "Duration at most 24 hours",
            },
          })}
        />
      </FormRow>

      <FormRow label="Priority" error={errors?.priority?.message}>
        <select
          className="rounded-md border border-solid border-gray-300 bg-gray-50  px-5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.4)] md:py-3"
          disabled={isCreating}
          id="priority"
          {...register("priority", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Priority should be at least 1",
            },
          })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          className="h-[5rem] w-[20rem] rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)] md:h-[10rem] md:w-[20rem]"
          disabled={isCreating}
          id="description"
          maxLength={150}
          {...register("description", {
            required: "This field is required",
            min: {
              value: 1,
              message: "description should be at least 1",
            },
          })}
        ></textarea>
      </FormRow>

      <FormRow>
        <button
          variation="secondary"
          type="reset"
          className="rounded-lg border border-solid border-gray-200 bg-gray-50 px-2 py-2 text-[0.8rem] font-[500] text-gray-600 hover:bg-gray-100 md:px-5 md:py-5 md:text-[1.4rem]"
        >
          Cancel
        </button>

        <button
          disabled={isCreating}
          className="flex flex-col items-center rounded-md bg-indigo-600 px-5 py-2 text-[1rem] font-medium text-indigo-50 hover:bg-indigo-500 md:px-10 md:py-5 md:text-[1.6rem]"
        >
          Add task
        </button>
      </FormRow>
    </form>
  );
}

export default CreateTaskForm;
