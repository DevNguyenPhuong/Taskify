import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="font flex items-center gap-5 text-xl text-gray-600">
      <img
        className="block aspect-square w-12 rounded-full object-cover object-center outline outline-offset-2 outline-gray-100 md:w-16"
        src={avatar || "default-user.jpg"}
        alt={`avatar of ${fullName}`}
      />
      <span className=" text-xl md:text-2xl">{fullName}</span>
    </div>
  );
}

export default UserAvatar;
