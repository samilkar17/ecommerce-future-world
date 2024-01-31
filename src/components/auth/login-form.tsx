"use client";
import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Social from "./social";
import { handleLogin } from "@/actions";
import { Label } from "../ui/label";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      // Recorrer las propiedades de values y agregarlas a formData
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      await handleLogin(formData);
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <Card className="w-[500px] bg-transparent">
      <CardHeader>
        <CardTitle className="text-white">Sign In</CardTitle>
        <CardDescription className="text-white">
          to continue to future world.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={isSubmitting}
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              variant={"secondary"}
              disabled={!isValid || isSubmitting}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex h-5 w-full  items-center justify-center  space-x-3 text-sm">
          <Separator className="w-1/3" />
          <p className="text-white">or</p>
          <Separator className="w-1/3" />
        </div>
        <Social />
        <Label className="text-white">
          No account?{" "}
          <Link href={"/signup"} className="text-indigo-400 hover:underline">
            Sing up
          </Link>
        </Label>
      </CardFooter>
    </Card>
  );
}
