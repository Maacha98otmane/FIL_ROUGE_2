import axios from 'axios';

const formerApi = axios.create({
    baseURL: 'http://localhost:3030/api/',
})

export const addFormer = async (data) => {
    return await formerApi.post('former/createFormer', data);
}
export const getAllFormers = async () => {
    const response = await formerApi.get('former/getAllFormers');
    return response.data.formers;
}

export const deleteFormer = async ({id}) => {
    return await formerApi.delete(`former/deleteFormer/${id}`, id);
}

export const countFormers = async () => {
    const response = await formerApi.get('former/countFormers');
    return response.data;

}
// export const updateFormer = async (data) => {
//     return await formerApi.patch(`former/updateFormer/${data.id}`, data);
// }


