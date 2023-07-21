import { supabase } from "@/lib/initSupabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, attending } = body;

  try {
    // Insert the data into the "guests" table
    const { data, error } = await supabase.from("guests").insert([
      {
        first_name: firstName,
        last_name: lastName,
        attending: attending,
      },
    ]);

    // Handle any errors that occurred during the insertion
    if (error) {
      console.error("Error inserting data:", error);
      return new Response("Error", { status: 500 });
    }

    // Data was successfully inserted
    console.log("Data inserted successfully:", data);

    // Respond with a success message
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return new Response("Error", { status: 500 });
  }
}
