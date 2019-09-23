export const fetchAllBottles = () => {
    return fetch('/api/bottles').then(res => {
        return res.json()
    })
}

export const fetchNote = (id) => {
    return fetch(`https://top-100-example.s3.amazonaws.com/${id}.json`).then(res => {
        return res.json()
    })
} 