import { extendType, inputObjectType, nonNull, objectType } from "nexus";
import { loginAttempt } from "../resolvers/loginAttempt";

export const Login = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('login', {
            type: LoginResponse,
            args: { credentials: nonNull(Credentials) },
            resolve: loginAttempt
        })
    },
})

const LoginResponse = objectType({
    name: 'loginResponse',
    definition(t) {
        t.nonNull.boolean('error');
        t.string('message');
        t.string('username');
    },
})

const Credentials = inputObjectType({
    name: 'loginCredentials',
    definition(t){
        t.nonNull.string('email');
        t.nonNull.string('password');
    }
});