import { useState } from "react";

let SingleItem = ({ item, removeItem, editItem }) => {



    return (
        <div key={item.id} className="h-[auto] w-[90%] bg-red-500 py-2 text-center mx-auto my-2 flex items-center justify-between rounded-md">
            <div className="flex w-[75%]">
                <input type="checkbox" onChange={() => editItem(item.id)} checked={item.completed} />
                <strong style={{ textDecoration: item.completed && 'line-through' }} className="uppercase ml-3 tracking-widest	">{item.name}</strong>
            </div>
            <button className="bg-red-500 p-1 text-1xl text-white rounded-sm" onClick={() => { removeItem(item.id) }}>Remove</button>
        </div>
    )
}

export default SingleItem;