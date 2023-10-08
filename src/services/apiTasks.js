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