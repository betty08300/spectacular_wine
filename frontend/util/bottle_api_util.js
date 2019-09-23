export const fetchAllBottles = () => {
    return fetch('/api/bottles').then(res => res.json())
}