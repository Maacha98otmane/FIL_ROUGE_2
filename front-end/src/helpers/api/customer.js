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

export const deleteCustomer = async ({id}) => {
    return await customerApi.delete(`customer/deleteCustomer/${id}`, id);
}
// export const updateCustomer = async (data) => {
//     return await customerApi.patch(`customer/updateCustomer/${data.id}`, data);
// }


