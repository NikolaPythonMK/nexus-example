import { makeSchema } from "nexus";
import { join } from 'path';
import * as types from './graphql'

export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
        schema: join(__dirname, '..', 'schema.graphql'), // 3
    }
})


// 2. Output path to where nexus should write the generated TypeScript definition types derived from your schema.
//    This is mandatory to benefit from Nexus' type-safety. We call this system "reflection". More on it later.
// 3. Output path to where nexus should write the SDL version of your GraphQL schema. More on it later as well.