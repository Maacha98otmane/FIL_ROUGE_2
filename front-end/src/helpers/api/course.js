import axios from 'axios';

const courseApi = axios.create({
    baseURL: 'http://localhost:3030/api/',
})

export const addCourse = async (data) => {
    return await courseApi.post('course/create', data);
}
export const getAllCourses = async () => {
    const response = await courseApi.get('course/getAll');
    return response.data;
}

export const deleteCustomer = async ({id}) => {
    return await courseApi.delete(`customer/deleteCustomer/${id}`, id);
}

export const countCustomers = async () => {
    const response = await courseApi.get('customer/countCustomers');
    return response.data;
}
export const getCourse = async (id) => {
    const response = await courseApi.get(`course/getOne/${id}`);
    console.log(response.data.course);
    return response.data.course;
}
// export const updateCustomer = async (data) => {
//     return await courseApi.patch(`customer/updateCustomer/${data.id}`, data);
// }


