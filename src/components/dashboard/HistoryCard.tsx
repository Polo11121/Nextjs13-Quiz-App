"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { History } from "lucide-react";

export const HistoryCard = () => {
  const router = useRouter();

  const handleClick = () => router.push("/history");

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={handleClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">History</CardTitle>
        <History size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          View past quiz attempts and scores.
        </p>
      </CardContent>
    </Card>
  );
};
