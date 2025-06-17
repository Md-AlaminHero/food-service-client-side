export const MyOrdersPromise = email => {
    return fetch(`https://restaurant-code-server.vercel.app/customers?email=${email}`).then(res => res.json())
}