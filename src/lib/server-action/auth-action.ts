"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../superbase/server";
import { z } from "zod";
import { FormSchema } from "../types";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();
  const response = await supabase.auth.signInWithPassword({ email, password });
  return JSON.stringify(response);
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();

  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.Next_PUBLIC_SITE_URL}api/auth/callback`,
    },
  });
  return JSON.stringify(response);
}