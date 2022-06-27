import axios from 'axios';

const courseApi = axios.create({
    baseURL: 'http://localhost:3030/api/',
})

export const addCourse = async (data) => {
    return await courseApi.post('course/create', data);
}
export const getAllCustomers = async () => {
    const response = await courseApi.get('customer/getAllCustomers');
    return response.data.customers;
}

export const deleteCustomer = async ({id}) => {
    return await courseApi.delete(`customer/deleteCustomer/${id}`, id);
}

export const countCustomers = async () => {
    const response = await courseApi.get('customer/countCustomers');
    return response.data;
}
export const getCustomer = async (id) => {
    const response = await courseApi.get(`customer/getCustomer/${id}`);
    console.log(response.data.customer);
    return response.data.customer;
}
// export const updateCustomer = async (data) => {
//     return await courseApi.patch(`customer/updateCustomer/${data.id}`, data);
// }


