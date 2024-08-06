import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

function Content() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12");
                setData(response.data)
                console.log('Data fetched successfully:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])


    return (
        <div className='p-4 mt-[140px] mb-[40px]'>
            {
                
                data.map((item,indx) => {
                    return (<ItemDisplay img_url={item.image_url} mrp={item.price}  method={item.shipping_method} type={"1"} name={item.item} key={indx}/>)
                })
            }
        </div>
    )
}

export default Content
