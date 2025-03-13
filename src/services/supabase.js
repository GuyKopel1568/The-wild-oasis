import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hsmvfocnbybpddcetqqm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzbXZmb2NuYnlicGRkY2V0cXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODQwOTcsImV4cCI6MjA1NzM2MDA5N30.ilr-kebUHE9UePe3o1Vxr8e30YnG6lDjj35WqL92D-k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
