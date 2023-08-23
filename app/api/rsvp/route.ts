import { supabase } from "@/lib/initSupabase";

async function registerGuestInDB(guest: {
  firstName: string;
  lastName: string;
  attending: boolean;
}) {
  try {
    await supabase.from("guests").insert([
      {
        first_name: guest.firstName,
        last_name: guest.lastName,
        attending: guest.attending,
      },
    ]);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return new Response("Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, attending } = body;

  const guestOne = {
    firstName,
    lastName,
    attending,
  };
  registerGuestInDB(guestOne);

  if (body.plusone) {
    const { plusoneFirstName, plusoneLastName, plusoneAttending } = body;
    const guestTwo = {
      firstName: plusoneFirstName,
      lastName: plusoneLastName,
      attending: plusoneAttending,
    };
    registerGuestInDB(guestTwo);
  }
}
