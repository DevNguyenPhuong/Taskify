import supabase from "./supabase";

export async function getMessages() {
  let { data, error } = await supabase.from("Messages").select("*");
  if (error) throw new Error("Messages could not be loaded");
  data.sort((a, b) => a.id - b.id);
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

export async function updateMesage(id) {
  let { data, error } = await supabase
    .from("Messages")
    .update({ isRecall: true })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error.message);
    throw new Error("Message could not be recalled");
  }

  return data;
}
