export const MyOrdersPromise = email => {
    return fetch(`https://food-service-server-side.vercel.app/customers?email=${email}`).then(res => res.json())
}