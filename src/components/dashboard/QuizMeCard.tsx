"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";

export const QuizMeCard = () => {
  const router = useRouter();

  const handleClick = () => router.push("/quiz");

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={handleClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Quiz Me!</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Challenge yourself with a quiz!
        </p>
      </CardContent>
    </Card>
  );
};
