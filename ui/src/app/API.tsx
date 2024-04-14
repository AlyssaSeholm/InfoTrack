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

const API_PATH  = Object.freeze({
    Company: {
        Get_ById: `${getConfig.baseUrl}/api/Company/ById`,
        Get_ByName: `${getConfig.baseUrl}/api/Company/ByName`,
        GetList_ByUserId: `${getConfig.baseUrl}/api/Company/AllByUserId`,
        GetAll: `${getConfig.baseUrl}/api/Company/All`,
        Post: `${getConfig.baseUrl}/api/Company`,
        Put: `${getConfig.baseUrl}/api/Company`,
        Delete: `${getConfig.baseUrl}/api/Company`
    },
    User: {
        Get_ById: `${getConfig.baseUrl}/api/User/ById`,
        Get_ByEmail: `${getConfig.baseUrl}/api/User/ByEmail`,
        Post: `${getConfig.baseUrl}/api/User`,
        Put: `${getConfig.baseUrl}/api/User`,
        Delete: `${getConfig.baseUrl}/api/User`
    },
    Query: {
        Get_ById: `${getConfig.baseUrl}/api/Query/ById`,
        GetList_ByUserId: `${getConfig.baseUrl}/api/Query/AllByUserId`, //TODO: Create this to Query
        Post: `${getConfig.baseUrl}/api/Query`,
        Put: `${getConfig.baseUrl}/api/Query`,
        Delete: `${getConfig.baseUrl}/api/Query`
    },
    Search: {
        GetList_ByQueryId: `${getConfig.baseUrl}/api/Search/ByQueryId`,
        GetList_ByUserId: `${getConfig.baseUrl}/api/Search/ByUserId`, 
        Post: `${getConfig.baseUrl}/api/Search/ByQueryId`, //create/execute a new search
        Delete: `${getConfig.baseUrl}/api/Search`//TODO: Allow user to delete a search?
    },
});
export default API_PATH;