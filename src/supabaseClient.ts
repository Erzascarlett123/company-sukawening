import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebkhxrqwsstktutulyzn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia2h4cnF3c3N0a3R1dHVseXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzcwODQsImV4cCI6MjA0ODcxMzA4NH0.v2TfwNyzPSUbvslrcGDITzFFMz6hzxg2BRoNWFQoa9w";
export const supabase = createClient(supabaseUrl, supabaseKey);
