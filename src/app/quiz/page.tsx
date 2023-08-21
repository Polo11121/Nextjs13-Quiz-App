import { CreateQuizForm } from "@/components/CreateQuizForm";
import { getAuthSession } from "@/lib/nextAuth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Quiz | Quizmify",
  description: "Create quiz at Quizmify and share with your friends.",
};

const QuizPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div>
      <CreateQuizForm />
    </div>
  );
};

export default QuizPage;
