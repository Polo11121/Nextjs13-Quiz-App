import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextAuth";
import { createQuizSchema } from "@/lib/validators/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import axios from "axios";

interface McqQuestions {
  questions: {
    question: string;
    answer: string;
    option1: string;
    option2: string;
    option3: string;
  }[];
}

interface OpenEndedQuestions {
  questions: {
    question: string;
    answer: string;
  }[];
}

export const POST = async (req: Request) => {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return {
        status: 401,
        body: {
          error: "Unauthorized",
        },
      };
    }

    const body = await req.json();

    const { topic, type } = createQuizSchema.parse(body);

    const quiz = await prisma.quiz.create({
      data: {
        topic,
        timeStart: new Date(),
        userId: session.user.id,
        gameType: type,
      },
    });

    const { data } = await axios.post<McqQuestions | OpenEndedQuestions>(
      `${process.env.API_URL}/api/questions`,
      body
    );

    if (type === "mcq") {
      const shuffleOptions = (array: string[]) =>
        array.sort(() => Math.random() - 0.5);

      const questions = (data as McqQuestions).questions.map(
        ({ question, answer, option1, option2, option3 }) => ({
          question,
          answer,
          questions: shuffleOptions([answer, option1, option2, option3]),
          quizId: quiz.id,
          questionType: type,
        })
      );

      await prisma.question.createMany({
        data: questions,
      });
    } else {
      const questions = (data as OpenEndedQuestions).questions.map(
        ({ question, answer }) => ({
          question,
          answer,
          quizId: quiz.id,
          questionType: type,
        })
      );

      await prisma.question.createMany({
        data: questions,
      });
    }

    return NextResponse.json(
      {
        quizId: quiz.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        message: error.issues,
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
};
