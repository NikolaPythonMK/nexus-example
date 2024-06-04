import { extendType, intArg, list, nonNull, objectType } from "nexus";

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.int('id')
        t.string('title')
        t.string('body')
        t.boolean('published')
    }
})

export const PostQuery = extendType({
    type: 'Query',
    definition(t) {
        t.field('drafts', {
            type: nonNull(list('Post')),
            resolve() {
                return [{ id: 1, title: 'Nexus', body: '...', published: false }]
            }
        })
    },
})

export const GetPostById = extendType({
    type: 'Query',
    definition(t) {
        t.field('getById', {
            type: nonNull(Post),
            args: {id: nonNull(intArg())},
            resolve: (root, args, ctx) => {
                return {id: args.id, title: 'Nexus', body: '...', published: true};
            }
        })
    },
})


// t.nonNull.list.field('drafts', {
//     type: 'Post',
// })