export const initialState = [
    {
        todo: "Make Bed",
        completed: false,
        id: new Date()
    },
    {
        todo: "Read Book",
        completed: false,
        id: new Date()
    }
    , {
        todo: "Go for a run",
        completed: false,
        id: new Date()
    },
    {
        todo: "walk dog",
        completed: false,
        id: new Date()
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, action.payload
            ]
        case "COMPLETED_TODO":
            return state.map((item) => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} : item
            })
        case "CLEAR_COMPLETED":
            return state.filter((item) => !item.completed)

        default:
            return state
    }
};