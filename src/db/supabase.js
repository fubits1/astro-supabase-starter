import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.MODE === 'development' ? import.meta.env.SUPABASE_URL : process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.MODE === 'development' ? import.meta.env.SUPABASE_ANON_KEY : process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
