import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useDeleteMessage } from "./useDeleteMessage";
import { useUpdateMessage } from "./useUpdateMessage";

function MessageOptionForm({ id, onCloseModal }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { deleteMessage } = useDeleteMessage();
  const { updateMesage } = useUpdateMessage();

  function onSubmit(data) {
    if (data.msgOption === "recall") {
      updateMesage(id);
      onCloseModal();
    }

    if (data.msgOption === "delete") deleteMessage(id);
  }

  return (
    <form
      className="w-20rem flex flex-col gap-6 overflow-hidden rounded-md  bg-gray-50 px-10 py-16 text-[1.4rem] md:w-[70rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Option" error={errors?.msgOption?.message}>
        <select
          className="rounded-md border border-solid border-gray-300 bg-gray-50  px-5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.4)] md:py-3"
          id="msgOption"
          {...register("msgOption", {
            required: "This field is required",
          })}
        >
          <option value="recall">Recall messages</option>
          <option value="delete">Delete</option>
        </select>
      </FormRow>

      <FormRow>
        <button className="flex flex-col items-center rounded-md bg-indigo-600 px-5 py-2 text-[1rem] font-medium text-indigo-50 hover:bg-indigo-500 md:px-10 md:py-5 md:text-[1.6rem]">
          Select
        </button>
      </FormRow>
    </form>
  );
}

export default MessageOptionForm;
