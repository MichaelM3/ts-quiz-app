export interface IOption {
    name: string;
    value: string;
}

export interface IUser {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
}

export const isUser = (foundUser: unknown): foundUser is string => {
    if (foundUser !== null && typeof foundUser === "string") {
        return true
    }
    return false
}

// Test User
export const newUser: IUser = { username: "Mizzike", firstName: "Michael", lastName: "Munz", age: 28 }

export interface IQuestionObj {
    id: number
    category: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    tags?: string[];
}

export interface INavProps {
    user: IUser | null;
}

export interface IQuizContainerProps {
    questionObjs: IQuestionObj[];
}

export interface IQuestionProps {
    question: string;
}
