export default function UserPage ({params} : {params: {username: string}}){
    //get user data from the server and pass it to the client
    const userQuery  = useQuery
    return(
        <div>
            <h1>{params.username}</h1>
        </div>
    )
}