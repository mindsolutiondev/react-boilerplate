export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const addUser = (datas) => {
    return {
        type: "ADDUSER",
        data: datas
    }
}