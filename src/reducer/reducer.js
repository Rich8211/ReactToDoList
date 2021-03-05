
export const reducer = (state, action) => {
    
    switch (action.type) {

        case "ADD_ITEM": {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }

        case "DELETE_ITEM": {
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        }

        default:
            return state
    }
}