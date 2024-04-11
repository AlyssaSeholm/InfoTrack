import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
// First, you import axios and some of its types from the axios library,
// AxiosInstance is the type for the axios instance object
// AxiosError is the type for the error object that you get when a request fails 
// AxiosResponse is the type for the response object that you get when a request succeeds

const axiosClient = (token: string | null = null): AxiosInstance => {
    // Next, you define a function called axiosClient that creates and returns an axios instance
// The function takes an optional parameter called token, which is either a string or null
// The token is used for authentication with the API, if needed 
// The function returns an axios instance, which is of type AxiosInstance
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    : {
        "Content-Type": "multipart/form-data",
      };
      // Then, you define a constant called headers, which is an object that contains the headers for the requests
// The headers object depends on whether the token is provided or not
// If the token is provided, the headers object has two properties: Authorization and Content-Type
// The Authorization property has the value of Bearer ${token}, which is a string that contains the token with the Bearer prefix
// The Bearer prefix is a convention that indicates the type of authentication scheme 
// The Content-Type property has the value of “multipart/form-data”, which is a string that indicates the type of data that is sent with the request 
// If the token is not provided, the headers object only has one property: Content-Type, with the same value as before

  const client = axios.create({
    baseURL: "https://dog.ceo/api",
    headers,
    timeout: 60000,
    withCredentials: false,
  });
  // After that, you define a constant called client, which is the axios instance that you create using the axios.create method
// The axios.create method takes an object as an argument, which contains some options for the instance
// The options that you use are:
// - baseURL: The base URL for the requests, which is the Dog API in this case
// - headers: The headers object that you defined earlier
// - timeout: The maximum time in milliseconds that the request can take
// - withCredentials: A boolean that indicates whether to send cookies with the request

  client.interceptors.request.use((config: any) => {
    // Next, you add a request interceptor to the client instance using the client.interceptors.request.use method
// A request interceptor is a function that runs before each request and modifies or handles the request in some way
// The client.interceptors.request.use method takes two arguments: a function that runs on success and a function that runs on error
// In this case, you only use the first argument, which is a function that takes a config parameter and returns the modified config object
// The config parameter is an object that contains the request configuration, such as the url, the method, the data, and the headers 
// The config object is what axios uses to make the request
    const token = localStorage.getItem("ACCESS_TOKEN");
    // Inside the function, you get the token from the local storage using the localStorage.getItem method
// The local storage is a browser feature that allows you to store data in the browser
// The data is stored as key-value pairs, where the key is a string and the value is also a string
// In this case, the key is "ACCESS_TOKEN" and the value is the token
// The localStorage.getItem method takes the key as an argument and returns the value as a string or null

config.headers = config.headers || {};
    config.headers = config.headers || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Then, you set the headers for the config object using the config.headers property
// The config.headers property is an object that contains the headers for the request
// You use the || operator to make sure that the config.headers object exists, or create an empty object if it doesn't
// Then, you check if the token exists using an if statement
// If the token exists, you set the Authorization property of the config.headers object to `Bearer ${token}`, which is the same as the headers object that you defined earlier
// This way, you add the token to the request header, if it exists

    return config;
    // Finally, you return the modified config object, which will be used by axios to make the request
  });
  

  client.interceptors.response.use(
     // Next, you add a response interceptor to the client instance using the client.interceptors.response.use method
 // A response interceptor is a function that runs after each response and modifies or handles the response in some way
 // The client.interceptors.response.use method takes two arguments: a function that runs on success and a function that runs on error
 // In this case, you use both arguments, which are functions that take a response parameter and return the modified response object
 // The response parameter is an object that contains the response data, such as the status, the data, and the headers
 // The response object is what axios returns to you when the request succeeds or fails

    (response: AxiosResponse) => {
      return response;
      // Inside the first function, which runs on success, you just return the response object as it is
  // You don't need to modify or handle the response in any way, because you are happy with the default behavior of axios
    },
    (error: AxiosError) => {
        // Inside the second function, which runs on error, you handle the error response in some way
  // The error parameter is an object that contains some information about the error, such as the message, the code, and the response
  // The error object is what axios returns to you when the request fails
  // The error.response property is the same as the response object in the success case, but it also has a status property that indicates the HTTP status code
  // You can use the status property to handle different types of errors
      try {
        const { response } = error;
        if (response?.status === 401) {
          localStorage.removeItem("ACCESS_TOKEN");
        }
      } catch (e) {
        console.error(e);
      }
      // In this case, you use a try-catch block to handle the error response
  // The try-catch block allows you to execute some code and catch any errors that occur
  // Inside the try block, you write the code that you want to execute
  // Inside the catch block, you write the code that you want to execute when an error occurs
  // In this case, you only write code inside the try block, because you don't need to do anything else when an error occurs
  // Inside the try block, you do the following:
  // - You destructure the response property from the error object using the const { response } = error syntax
  // - You check if the response exists and if the status is 401 using the response?.status === 401 syntax
  // - The response?.status syntax is called optional chaining, which allows you to access a property of an object that may be undefined or null
  // - If the response exists and the status is 401, it means that the request was unauthorized, and the token was invalid or expired
  // - In that case, you remove the token from the local storage using the localStorage.removeItem method
  // - The localStorage.removeItem method takes the key as an argument and removes the key-value pair from the local storage
  // - In this case, the key is "ACCESS_TOKEN" and the value is the token
      throw error;
    // Finally, you throw the error object, which means that you re-throw the error to the caller of the axios instance
  // This way, you can handle the error in the component that uses the axios instance, such as showing an error message or retrying the request
}
  );

  return client;
  // After adding the interceptors, you return the client object, which is the axios instance that you created and configured return client; };

};

export default axiosClient;// At the end of the file, you export the axiosClient function as the default export, which means that you can import it in other files without using curly braces