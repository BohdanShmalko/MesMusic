export const empty = value => {
    if (value && value.length !== 0) return undefined
    return 'The field is empty'
}

export const maxLength = length => value => {
    if(value && value.length > length) return `You need to enter less than ${length} characters`
    return undefined
}

export const minLength = length => value => {
    if(value && value.length < length) return `You need to enter more then ${length} characters`
    return undefined
}

export const repeatPassword = rightValue => value => {
    if (value && value !== rightValue) return `The repeated password does not match`
    return undefined
}

export const rememberValue = to => value => {
    to = value
    return undefined
}