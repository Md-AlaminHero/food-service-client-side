export const foodsCreatedByPromise = email => {
    return fetch(`https://restaurant-code-server.vercel.app/foods?email=${email}`).then(res => res.json())
}