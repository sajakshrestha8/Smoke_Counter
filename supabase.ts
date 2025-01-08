import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ikqwjmcefhixojynhoyd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcXdqbWNlZmhpeG9qeW5ob3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjYxNTQsImV4cCI6MjA1MTkwMjE1NH0.X4s173T4B9RK4wEaRz-dduvdp8ZrOdRb7JwsPoSMeLQ";

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true, 
        persistSession:true,
        detectSessionInUrl: false,
    }
})