export const initialState = {
    todo :[
    {
        item: 'Work on todo reducers',
        completed: false,
        id: 0
    },
    {
        item: 'Yoga',
        completed: false,
        id: 1
    },
    {
        item: 'Read Book',
        completed: false,
        id: 2
    }
]
}

export const todoReducer = (state, action) => {
    console.log(initialState);
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo: [...state.todo,
                    {
                        item:action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ]
            }
        default:
            return state;
    }
};