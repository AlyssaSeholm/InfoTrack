import axios, { AxiosResponse } from 'axios';

//interface for the Helpers
interface Params {
    baseUrl: string
    headers : any
    method: string
} //todo
const baseUrl ="http://localhost:5199"; //process.env.REACT_APP_API_BASE_URL;

//helper post request
const postConfig: Params = {
    baseUrl: `${baseUrl}`,//"https://jsonplaceholder.typicode.com/",
    headers: {
        "Authorization": "",
            },
    method: 'post'
}
export  const postAPI = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}`,
        data
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}

//helper get request
const getConfig : Params = {
    baseUrl: `${baseUrl}`,
        headers: {
            "Authorization": "",
        },
    method: 'get'
}
export const getAPI = async (url: string, data: any): Promise<any> =>{
    const fullUrl = `${getConfig.baseUrl}/${url}/${data}`;
    console.log('fullURL', fullUrl)
;
    return await axios({
        ...getConfig,
        url: fullUrl,
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.response?.status || 500, // Default to 500 if status is not available
            data: error.response?.data || 'Internal server error', // Default error message
          };
        //     status: error.status,
        //     data: error.response
        // }
    })
}