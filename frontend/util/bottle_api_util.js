export const fetchAllBottles = () => {
    return fetch('/api/bottles').then(res => {
        return res.json()
    })
}