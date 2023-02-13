const initalState = []

const reducer = (state=initalState, action) => {
    switch(action.type){
        case "ADD_BLOG":
            return [...state, action.blog]

        case "UPDATE":
            return state.map(blog => {
                if (blog.id === action.id){
                    return {...blog, ...action.update}
                }else {
                    return blog
                }
            })
        case "DELETE_BLOG":
           return state.filter((blog) => {
                return blog.id !== action.id
           })
        default:
            return state
    }

}

export default reducer