
export const addBlog = ({title,img, date,header, desc}) => ({
    type: "ADD_BLOG",
    blog: {
        title,
        desc,
        date,
        img,
        header,
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