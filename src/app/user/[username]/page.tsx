import { FETCH } from "@/utils/fetch"
import { notFound } from "next/navigation";
import {UserType} from "@/types/user"
import Client from "./client";


export default  async function UserPage ({params} :{params: Promise<{ username: string }>}){
    //get user data from the server and pass it to the client

    const username = (await params).username;
    
    let user : UserType| undefined;
    try{
        user = await FETCH.user.get(username)
        console.log(user)
    }
    catch(e){
        notFound()
    }

    return <Client user={user} />
}