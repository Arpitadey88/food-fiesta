const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'https://food-fiesta-strapi.onrender.com/api';
const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})
const getLatestProducts = () => axiosClient.get('/products?populate=*');
const getProductsById = (id) => axiosClient.get('/products/' + id + '?populate=*');
const getProductByCategory = (category) => axiosClient.get('/products?filters[category][$eq]=' + category + "&populate=*")
const addToCart = (data) => axiosClient.post('/carts?populate=*', data)
const getUserCartItems = (email) => axiosClient.get('https://food-fiesta-strapi.onrender.com/api/carts?populate[products][populate][0]=banner&filters[email][$eq]=' + email)
const deleteUserCartItem = (id) => axiosClient.delete('/carts/' + id)
const createOrder = (data) => axiosClient.post('/orders', data)
export default {
    getLatestProducts,
    getProductsById,
    getProductByCategory,
    addToCart,
    getUserCartItems,
    deleteUserCartItem,
    createOrder
}