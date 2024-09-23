'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Logo from "../../../../public/cypresslogo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { actionLoginUser } from '@/lib/server-action/auth-action';
import { Button } from '@/components/ui/button';
import Loader from '@/components/global/loader';
const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');
  const form = useForm<Z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email : '',
      password : ''
    }
  });

  const onLoading = form.formState.isSubmitting;
  const isLoading = form.formState.isSubmitting;
  const onSubmit: SubmitHandler<Z.infer<typeof FormSchema>> = async (
    formData,
  ) => {
    const result = await actionLoginUser(formData);
    const { error } = JSON.parse(result);
    if (error) {
      console.log(error);
      form.reset();
      setSubmitError("Email or Password Wrong");
    } else router.replace("/dashboard");
  };
  return  <Form {...form}>
  <form
    onChange={() => {if (submitError) setSubmitError("");}}
    
    onSubmit={form.handleSubmit(onSubmit)}
    className="flex w-full flex-col space-y-6 sm:w-[400px] justify-center sm:justify-center"
  >
    <Link href={"/"} className="flex w-full items-center justify-start">
      <Image src={Logo} alt="cypress logo" width={50} height={50} />
      <span className="ml-2 text-4xl font-semibold dark:text-white">
        cypress
      </span>
    </Link>
    <FormDescription className="text-foreground/60">
      An all-In-One Collaboration and Productivity
    </FormDescription>
    <FormField
      disabled={isLoading}
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type="email" placeholder="Email" {...field}></Input>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      disabled={isLoading}
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type="password"
              placeholder="Password"
              {...field}
            ></Input>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    {submitError && <FormMessage>{submitError}</FormMessage>}
    <Button
      type="submit"
      className="w-full p-6"
      size="lg"
      disabled={isLoading}
    >
      {!isLoading ? "Login" : <Loader />}
    </Button>
    <span className="text-center">
      Don't have an account?{" "}
      <Link href={"/signup"} className="text-primary">
        Sign Up
      </Link>
    </span>
  </form>
</Form>

}

export default LoginPage