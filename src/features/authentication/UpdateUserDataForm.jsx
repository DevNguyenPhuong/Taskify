import { useState } from "react";
import FormRow from "../../ui/FormRow";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form
      className="overflow-hidden border border-solid border-gray-200 bg-gray-50 px-16 py-10 text-[1.4rem]"
      onSubmit={handleSubmit}
    >
      <FormRow label="Email address">
        <input
          value={email}
          disabled
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
        />
      </FormRow>
      <FormRow label="Full name">
        <input
          className="rounded-md border border-solid border-gray-300 bg-gray-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <input
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
          type="file"
          className="rounded-md text-[1.4rem]  [&::file-selector-button]:mr-5 [&::file-selector-button]:cursor-pointer [&::file-selector-button]:rounded [&::file-selector-button]:border-none [&::file-selector-button]:bg-indigo-600 [&::file-selector-button]:px-3 [&::file-selector-button]:py-5 [&::file-selector-button]:font-[500] [&::file-selector-button]:text-indigo-50 [&::file-selector-button]:transition-colors [&::file-selector-button]:duration-200  [&::file-selector-button]:hover:bg-indigo-700 "
        />
      </FormRow>
      <FormRow>
        <button
          type="reset"
          className="rounded-lg border border-solid border-gray-200 bg-gray-50 px-5 py-5 text-[1.4rem] font-[500] text-gray-600 hover:bg-gray-100"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className=" rounded-lg bg-indigo-600 px-5 py-5 text-[1.4rem] font-[500] text-indigo-50 hover:bg-indigo-700">
          Update account
        </button>
      </FormRow>
    </form>
  );
}

export default UpdateUserDataForm;
