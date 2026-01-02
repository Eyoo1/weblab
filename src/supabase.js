import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://anvqpdlplidgjyeiheeu.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudnFwZGxwbGlkZ2p5ZWloZWV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNTMyOTUsImV4cCI6MjA4MTkyOTI5NX0.jzsGPLcd78xJQQp9rctE2lVVnI736SqsJInX5LoBX3o";
  

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

