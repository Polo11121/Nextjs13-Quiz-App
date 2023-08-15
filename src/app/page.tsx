import { SignInButton } from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getAuthSession();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizmify!</CardTitle>
          <CardDescription>
            Quizmify is a quiz app that allows you to create and play quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
