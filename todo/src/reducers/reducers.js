export const initialState = [
    {
        todo: "Make Bed",
        completed: false,
        id: 0
    },
    {
        todo: "Read Book",
        completed: false,
        id: 1
    }
    , {
        todo: "Go for a run",
        completed: false,
        id: 2
    },
    {
        todo: "walk dog",
        completed: false,
        id: 3
    }
]

export const todoReducer = (state, action) => {
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