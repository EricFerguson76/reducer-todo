export const initialState = {
    items: [{item: '',
    completed: false,
    id: Date.now()
  }]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'MAKE_TODO':
            return [
                ...state,
                action.payloads
            ];
        default:
            return state;
    }
}