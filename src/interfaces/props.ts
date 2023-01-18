export interface INavProps {
    user: IUser | null;
}

export interface IQuizContainerProps {
    questionObjects: IQuestionObject[];
    score: number;
    currentQuestion: number;
    setScore: (newScore: number) => void;
    setCurrentQuestion: (newScore: number) => void;
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
    currentQuestion: number;
}
