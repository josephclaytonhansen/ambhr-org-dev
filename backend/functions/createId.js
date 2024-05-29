const createId = (length, alloweds) => {
    let id = ''
    for (let i = 0; i < length; i++) {
        id += alloweds[Math.floor(Math.random() * alloweds.length)]
    }
    return id
}