import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

async function registerGuestInDB(guest: {
  firstName: string;
  lastName: string;
  attending: boolean;
  vegetarian: boolean;
  glutenIntolerant: boolean;
  lactoseIntolerant: boolean;
  nutAllergy: boolean;
  shellfishAllergy: boolean;
  otherAllergies: string;
}) {
  try {
    await supabase.from("guests").insert([
      {
        first_name: guest.firstName,
        last_name: guest.lastName,
        attending: guest.attending,
        vegetarian: guest.vegetarian,
        gluten_intolerant: guest.glutenIntolerant,
        lactose_intolerant: guest.lactoseIntolerant,
        nut_allergy: guest.nutAllergy,
        other_requirements: guest.otherAllergies,
        shellfish_allergy: guest.shellfishAllergy,
      },
    ]);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const guestOne = {
    firstName: body.firstName,
    lastName: body.lastName,
    attending: body.attending,
    vegetarian: body.vegetarian,
    nutAllergy: body.nutAllergy,
    glutenIntolerant: body.glutenIntolerant,
    lactoseIntolerant: body.lactoseIntolerant,
    shellfishAllergy: body.shellfishAllergy,
    otherAllergies: body.otherAllergies,
  };

  return await registerGuestInDB(guestOne);
}
