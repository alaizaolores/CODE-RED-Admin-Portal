import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gugabfdcamppydzgjult.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z2FiZmRjYW1wcHlkemdqdWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MDU4MzEsImV4cCI6MjA0ODI4MTgzMX0.ab-8xAWWUbFfB8BBVEHpexRtVR-t_XLiQfYb4-VX8mk";
const client = createClient(supabaseUrl, supabaseKey);

export default client;
