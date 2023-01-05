export interface IUser {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
}

export const isUser = (foundUser: unknown): foundUser is string => {
    if (foundUser !== null) {
        return true
    }
    return false
}

// Test User
export const newUser: IUser = { username: "Mizzike", firstName: "Michael", lastName: "Munz", age: 28 }

export interface INavProps {
    user: IUser | null;
}
