import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ezagljfxavxbcwazotwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YWdsamZ4YXZ4YmN3YXpvdHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDI3NzQsImV4cCI6MjAxMTgxODc3NH0.4B0BFzsdHcda7Ord0S724OSAOHRwt27F5sFKY5a5PzQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
