export const cutText = (howMutch : number) => (text : string) => {
    if(text.length < howMutch) return text
    return text.slice(0, howMutch) + '...'
}