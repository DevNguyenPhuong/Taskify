import supabase from "./supabase";

export async function getTasks({ userId }) {
  // const { data, error } = await supabase.from("cabins").select("*");

  const { data, error } = await supabase
    .from("Task")
    .select("*")
    .eq("user", userId);

  if (error) {
    console.log(error.message);
    throw new Error("Task could not be loaded");
  }

  return data;
}

export async function CreateTask(newTask) {
  let { data, error } = await supabase
    .from("Task")
    .insert([{ ...newTask }])
    .select();

  if (error) {
    console.log(error.message);
    throw new Error("Task could not be created");
  }

  return data;
}

export async function deleteTask(id) {
  let { error } = await supabase.from("Task").delete().eq("id", id);

  if (error) {
    console.log(error.message);
    throw new Error("Task could not be deleted");
  }
}
