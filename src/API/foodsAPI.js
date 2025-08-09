export const foodsCreatedByPromise = email => {
    return fetch(`https://food-service-server-side.vercel.app/foods?email=${email}`).then(res => res.json())
}