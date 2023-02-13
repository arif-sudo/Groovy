
export const addBlog = ({title, desc}) => ({
    type: "ADD_BLOG",
    blog: {
        title,
        desc,
        id: crypto.randomUUID()
    }
})

export const updateBlog = (id,update) => ({
    type: "UPDATE",
    id,
    update,
})

export const removeBlog = (id) => ({
    type: 'DELETE_BLOG',
    id
})
