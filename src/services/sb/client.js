import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export default createClient(import.meta.env.API_URL, import.meta.env.API_KEY);
console.log(import.meta.env.API_URL, import.meta.env.API_KEY);
