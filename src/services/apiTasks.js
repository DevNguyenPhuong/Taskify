import supabase from "./supabase";

export async function getTasks() {
  // const { data, error } = await supabase.from("cabins").select("*");

  const { data, error } = await supabase.from("Task").select("*");

  if (error) {
    console.log(error.message);
    throw new Error("Task could not be loaded");
  }

  return data;
}
