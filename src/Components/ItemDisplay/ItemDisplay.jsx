import React from 'react'

function ItemDisplay({ type,name,mrp, img_url,method}) {
    return (
        <div className='flex mb-4'>
            <div className='mx-2'>
                <img src="https://placehold.co/50x50.png" alt="" className='h-[52px] w-[66px] rounded-md' />
            </div>
            <div className='w-full mx-2 pb-2 border-b-2'>
                <div><h5 className='font-semibold'>{name}</h5></div>
                <div className='flex justify-between'>
                    <div>
                        <h6><span className='text-stone-400'>MRP: </span><span className='font-semibold'>₹{mrp}</span></h6>
                    </div>
                    <div>
                        <h6 className='text-stone-400'>{method}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDisplay
