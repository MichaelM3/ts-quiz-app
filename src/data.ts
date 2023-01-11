import { IQuestionObj } from "./interfaces";

export const fetchQuizData = async (): Promise<IQuestionObj> => {
    const res = await fetch("https://the-trivia-api.com/api/questions?limit=20&categories=science,history")
    const data: unknown = res.json()

}


