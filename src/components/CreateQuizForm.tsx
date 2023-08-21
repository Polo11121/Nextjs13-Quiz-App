"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { CreateQuizValidator, createQuizSchema } from "@/lib/validators/quiz";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "@/components/ui/Separator";
import { useCreateQuiz } from "@/hooks/useCreateQuiz";

export const CreateQuizForm = () => {
  const form = useForm<CreateQuizValidator>({
    resolver: zodResolver(createQuizSchema),
    defaultValues: {
      amount: 3,
      topic: "maths",
      type: "open_ended",
    },
  });
  const { mutate: createQuiz, isLoading } = useCreateQuiz();

  const submitHandler = (values: CreateQuizValidator) => createQuiz(values);

  const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("amount", parseInt(e.target.value));
  };

  const setOpenEndedHandler = () => form.setValue("type", "open_ended");

  const setMultipleChoiceHandler = () => form.setValue("type", "mcq");

  form.watch("type");

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2x">Create Quiz</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitHandler)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a topic..." {...field} />
                    </FormControl>
                    <FormDescription>Please provide a topic</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter an amount..."
                        min={1}
                        max={10}
                        {...field}
                        onChange={changeAmountHandler}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={setMultipleChoiceHandler}
                  variant={
                    form.getValues("type") === "mcq" ? "default" : "secondary"
                  }
                  className="w-1/2 rounded-r-none"
                >
                  <CopyCheck className="w-4 h-4 mr-2" />
                  Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  type="button"
                  onClick={setOpenEndedHandler}
                  variant={
                    form.getValues("type") === "open_ended"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-l-none"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Open Ended
                </Button>
              </div>
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
