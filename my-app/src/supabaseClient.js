import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ptuljdocrqtzozduudkl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dWxqZG9jcnF0em96ZHV1ZGtsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQ2OTM2MSwiZXhwIjoyMDYyMDQ1MzYxfQ.v-DqANc6JJ7I8GSdhEZk-P3Raq5qZ6wfEHa84DNLQMs-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)