import axios from 'axios';



const customerApi = axios.create({
    baseURL: 'http://localhost:3030/api/',
})


export const addCustomer = async (data) => {
    return await customerApi.post('customer/createCustomer', data);
}
export const getAllCustomers = async () => {
    const response = await customerApi.get('customer/getAllCustomers');
    return response.data.customers;
}

// export const updateArticle = async (data) => {
//     return await articleApi.patch(`/updateArticle/${data.id}`, data);
// }

export const deleteCustomer = async ({id}) => {
    return await customerApi.delete(`customer/deleteCustomer/${id}`, id);
}
