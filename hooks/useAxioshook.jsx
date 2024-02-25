import axios from "axios";

const axioshook = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxioshook = () => {
    return axioshook;

};

export default useAxioshook;