import axios from "axios";

const RAV_API_BASE_URI = "https://api.ravelry.com";
const RAV_USERNAME = process.env.RAV_USERNAME;
const RAV_PASSWORD = process.env.RAV_KEY

export const createRavelryProject = async(projectData) => {
    try {
        const response = await axios.post(
            `${RAV_API_BASE_URI}/projects/DragonChilde/create.json`, 
            projectData,
            {
                auth: {
                    username: RAV_USERNAME,
                    password: RAV_PASSWORD
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }
         )

         return response.data
        
    } catch (e) {
        console.error("error uploading project to Ravelry", e.message)

        throw new Error('Could not add project to Ravelry')
    }
}

export const getRavelryProject = async() => {

    try {
        const response = await axios.get(`${RAV_API_BASE_URI}/projects/DragonChilde/list.json`, {
            auth: {
                username: RAV_USERNAME,
                password: RAV_PASSWORD
            }
        })

        return response.data
    } catch (e) {
        console.error("error fetching projects from Ravelry", e.message)
        throw new Error("could not fetch projects from Ravelry")
    }
}