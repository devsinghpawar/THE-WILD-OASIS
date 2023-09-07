import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qbubbtvmzxwxplwxtbtv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidWJidHZtenh3eHBsd3h0YnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MDIyNDIsImV4cCI6MjAwOTM3ODI0Mn0.sqrmMLl5Er3aFGer4CRn2TdVto6tKV5kH_Yu2jto_YA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
