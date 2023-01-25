const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//getSongs async function

export async function getSongs() {
    const { data, error } = await client
        .from('songs')
        .select('*');

    if (error) console.error(error);

    return data;
}

//getIndividualSong async function

export async function getIndividualSong(id) {
    const { data, error } = await client
        .from('songs')
        .select('*, year_id (year)')
        .eq('id', id)
        .single();

    if (error) console.error(error);

    return data;
}