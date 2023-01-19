import { IUser, IQuestionObject } from './index'

export interface INavProps {
    user: IUser | null;
}

export interface IQuizContainerProps {
    score: number;
    questionObject: IQuestionObject;
    currentQuestionIndex: number;
    setScore: (newScore: number) => void;
    setCurrentQuestionIndex: (newScore: number) => void;
}

export interface IQuestionProps {
    question: string;
}

export interface IChoiceContainerProps {
    choices: string[];
    checkAnswer: (answer: string) => void;
}

export interface IChoiceProps {
    choice: string;
    checkAnswer: (answer: string) => void;
}

export interface IResultsContainerProps {
    score: number;
    currentQuestionIndex: number;
}
