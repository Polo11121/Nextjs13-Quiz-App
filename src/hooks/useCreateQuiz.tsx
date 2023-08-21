import { CreateQuizValidator } from "@/lib/validators/quiz";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

export const useCreateQuiz = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: CreateQuizValidator) => {
      const { data } = await axios.post<{ quizId: string }>(
        "http://localhost:3000/api/quiz",
        payload
      );

      return data;
    },
    onSuccess: (data, variables) => {
      router.push(
        `/play/${variables.type === "open_ended" ? "open-ended" : "mcq"}/${
          data.quizId
        }`
      );
    },
  });
};
