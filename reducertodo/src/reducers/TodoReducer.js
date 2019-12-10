export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
      
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'MAKE_TODO':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}