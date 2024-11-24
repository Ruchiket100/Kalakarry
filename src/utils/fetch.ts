const request = async (
    {
        url, 
        method = 'GET',
        data
    }: {url: string, method: "GET" | "POST" | "PUT" | "DELETE", data: any}
)=> {
    try{
    const response = await fetch("http://localhost:8080"+url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await response.clone().json();
        if (json && response.ok) {
            return json;
        } else {
            throw json;
        }} catch(err){throw err}
}
export const  FETCH = {
    auth: {
        login: async (data: {email: string, password: string}) => {
            return request({
                url: '/auth/login',
                method: 'POST',
                data
            })
        },
        register: async (data: {email: string, password: string}) => {
            return request({
                url: '/auth/register',
                method: 'POST',
                data
            })
        },
        logout: async () => {
            return request({
                url: '/auth/logout',
                method: 'POST',
                data: {}
            })
        }
    }
    
}