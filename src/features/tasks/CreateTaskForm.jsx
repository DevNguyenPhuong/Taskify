import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { CreateTask } from "../../services/apiTasks";
import FormRow from "../../ui/FormRow";
import { useUser } from "../authentication/useUser";

function CreateTaskForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: CreateTask,
    onSuccess: () => {
      toast.success("Task created");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      reset();
      onCloseModal();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate({
      ...data,
      user: user.id,
    });
  }

  return (
    <form
      className="flex w-[70rem] flex-col gap-6 overflow-hidden  rounded-md bg-gray-50 px-10 py-16 text-[1.4rem]"
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
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
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

      <FormRow>
        <button
          variation="secondary"
          type="reset"
          className="rounded-lg border border-solid border-gray-200 bg-gray-50 px-5 py-5 text-[1.4rem] font-[500] text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          disabled={isCreating}
          className="flex flex-col items-center rounded-md bg-indigo-600 px-10 py-5 text-[1.6rem] font-medium text-indigo-50 hover:bg-indigo-500"
        >
          Add task
        </button>
      </FormRow>
    </form>
  );
}

export default CreateTaskForm;
