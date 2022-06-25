import axios from 'axios';



const articleApi = axios.create({
    baseURL: 'http://localhost:3030/api/',
})


export const getAllArticle = async () => {
    const response = await articleApi.get('category/getAll');
    return response.data.message;
}

export const addArticle = async (data) => {
    return await articleApi.post('category/create', data);
}

// export const updateArticle = async (data) => {
//     return await articleApi.patch(`/updateArticle/${data.id}`, data);
// }

// export const deleteArticle = async ({id}) => {
//     return await articleApi.delete(`/deleteArticle/${id}`, id);
// }

export default articleApi