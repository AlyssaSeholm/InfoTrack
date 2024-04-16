import axios from "axios"

const checkAuth = () => {
/*  Getting token value stored in localstorage, if token is not present we will open login page 
    for all internal dashboard routes  */
    const TOKEN = localStorage.getItem("token")
    const PUBLIC_ROUTES = ["login", "forgot-password", "register", "documentation"]

    const isPublicPage = PUBLIC_ROUTES.some( r => window.location.href.includes(r))

    if(!TOKEN && !isPublicPage){
        //TODO: Logout user if their token is expired and they are trying to access a non-public page
        //window.location.href = '/login'
        return;
    }else{
        axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`

        axios.interceptors.request.use(function (config) {
            // TODO: Add this code to show global loading indicator - prevent multiple loading indicators
            document.body.classList.add('loading-indicator');
            return config
          }, function (error) {
            return Promise.reject(error);
          });
          
          axios.interceptors.response.use(function (response) {
            // TODO: add code to hide global loading indicator?
            document.body.classList.remove('loading-indicator');
            return response;
          }, function (error) {
            document.body.classList.remove('loading-indicator');
            return Promise.reject(error);
          });
        return TOKEN
    }
}

export default checkAuth