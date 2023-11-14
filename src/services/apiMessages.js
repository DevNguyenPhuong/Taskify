import supabase from "./supabase";

export async function getMessages() {
  const { count } = await supabase
    .from("Messages")
    .select("*", { count: "exact", head: true });
  const start = count > 20 ? count - 20 : 0;

  const { data, error } = await supabase
    .from("Messages")
    .select("*")
    .range(start, count - 1);

  if (error) throw new Error("Messages could not be loaded");

  return data;
}

export async function CreateMessage(newMessage) {
  let { data, error } = await supabase
    .from("Messages")
    .insert([{ ...newMessage }])
    .select();

  if (error) {
    console.log(error.message);
    throw new Error("Message could not be sent");
  }

  return data;
}

export async function deleteMesage(id) {
  let { error } = await supabase.from("Messages").delete().eq("id", id);

  if (error) {
    console.log(error.message);
    throw new Error("Message could not be deleted");
  }
}
