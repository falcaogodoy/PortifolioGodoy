import { useEffect, useState } from 'react';
import  axios  from 'axios';


const useRequestData = (initialDate, url) => {
    const [data, setData] = useState(initialDate);


    useEffect(() => {
        axios.get(url , {
            headers: { 
                Authorization: localStorage.getItem('token')
        }
    })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
            alert('Ocorreu um error')
        })

    }, [url])
    return (data);
}

export default useRequestData;