import Axios from "axios";
import { Buffer } from "buffer";
class API {
    constructor(){
    this.axios = Axios.create(
        {
            headers:{
                "Accept" : "x-api-key",
                "Authorization" : `fa73b363-ceea-444b-be0e-b2f371bebaba`,
            }
        })
    }
    getCats = () => {
        return this.axios.get("https://api.thecatapi.com/v1/images/search?limit=30")
        .then((response) => {
            return (response.data.map(
                (respPart) => (respPart.url)
            ))
        })
    }
}

export default API;
