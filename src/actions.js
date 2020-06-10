export const addItem = (id) => ({ type: "ON_ITEM_ADD", id })

export const removeItem = (id) => ({ type: "ON_ITEM_REMOVE", id })

export const reset = () => ({ type: "ON_RESET" })