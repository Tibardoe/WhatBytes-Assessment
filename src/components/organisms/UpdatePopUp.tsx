"use client";

import Image from "next/image";
import { number, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useActiveLink } from "@/context/LinkContext";
import Numbering from "../atoms/Numbering";

const formSchema = z.object({
  rank: z
    .string()
    .min(1, "Rank is required and should be a number")
    .transform((val) => Number(val))
    .refine((val) => !Number.isNaN(val), {
      message: "Rank is required and should be a number",
    }),

  percentile: z
    .string()
    .min(1, "Percentile is required and should be between 0 and 100")
    .max(100, "Percentile should be between 0 and 100")

    .transform((val) => Number(val))
    .refine((val) => !Number.isNaN(val), {
      message: "Percentile should be a number",
    }),

  score: z
    .string()
    .min(1, "Score is required and should be a number")
    .max(15, "Score should be between 1 and 15")
    .transform((val) => Number(val))
    .refine((val) => !Number.isNaN(val), {
      message: "Score is required and should be a number",
    }),
});
type FormData = z.infer<typeof formSchema>;

export default function UpdatePopUp() {
  const { form, setForm, setShowPopup } = useActiveLink();

  const formm = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rank: form?.rank,
      percentile: form?.percentile,
      score: form?.score,
    },
  });

  function handleSubmit(data: FormData) {
    setForm(data);
    setShowPopup(false);
  }

  function handleCLick() {
    setShowPopup(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-dvh bg-black bg-opacity-70 flex justify-center items-center">
      {/* Pop-Up */}
      <div className="bg-white p-7 w-3/4 rounded-lg xl:w-1/2">
        <div className="font-bold flex justify-between text-2xl mb-10">
          <h1>Update Scores</h1>
          <Image
            src="/assets/images/html.svg"
            alt="HTML logo"
            width={50}
            height={50}
          />
        </div>

        <Form {...formm}>
          <form
            onSubmit={formm.handleSubmit(handleSubmit)}
            className="space-y-10 flex flex-col"
          >
            {/* Rank Field */}
            <FormField
              control={formm.control}
              name="rank"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <Label
                    className="text-lg flex items-center gap-3 min-w-fit"
                    htmlFor="name"
                  >
                    <Numbering number={1} />
                    Update your <span className="font-bold">Rank</span>
                  </Label>
                  <div>
                    <FormControl className="max-w-60">
                      <Input
                        className="border border-blue-500 focus:outline-none"
                        id="rank"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Percentile Field */}
            <FormField
              control={formm.control}
              name="percentile"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <Label
                    className="text-lg flex items-center gap-3 min-w-fit"
                    htmlFor="percentile"
                  >
                    <Numbering number={2} />
                    Update your<span className="font-bold">Percentile</span>
                  </Label>
                  <div>
                    <FormControl className="max-w-60">
                      <Input
                        className="border border-blue-500"
                        id="percentile"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Score Field */}
            <FormField
              control={formm.control}
              name="score"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <Label
                    className="text-lg flex items-center gap-3 min-w-fit"
                    htmlFor="score"
                  >
                    <Numbering number={3} />
                    Update your
                    <span className="font-bold">Current Score (out of 15)</span>
                  </Label>
                  <div>
                    <FormControl className="max-w-60">
                      <Input
                        className="border border-blue-500"
                        id="score"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="space-x-5 self-end">
              <Button
                onClick={handleCLick}
                variant="outline"
                className="text-blue-900 font-bold border border-blue-900"
              >
                Cancel
              </Button>
              <Button
                className="text-white font-bold bg-blue-900"
                type="submit"
              >
                Save
                <span className="font-bold text-2xl">&#8594;</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
