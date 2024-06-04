import { FieldResolver } from "nexus";
import { users } from "../../db";

export const loginAttempt: FieldResolver<"Mutation", "login"> = (_, args) => {
    try{
        console.log(args.credentials.email);
        if (users.find(u => u.email === args.credentials.email && u.password === args.credentials.password)){
            return {
                error: false,
                message: 'Success',
                username: args.credentials.email
            }
        }
        throw new Error();
    }
    catch (error) {
        const errorMessage = (error as Error).message || "Login attempt failed!";
        return {
            error: true,
            message: errorMessage
        }
    }
}