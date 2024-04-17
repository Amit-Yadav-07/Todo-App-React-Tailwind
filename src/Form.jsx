import { useState } from "react";
import { toast } from "react-toastify";


let Form = ({ addItem }) => {
    // console.log(addItem);
    let [input, setInput] = useState('')

    let submitHandler = (e) => {
        e.preventDefault()
        if (!input) {
            toast.error('Please Provide Value')
            return
        }
        addItem(input)
        setInput('')
    }

    return (
        <form className="text-center w-[80%] mx-auto mb-3  flex justify-between" onSubmit={submitHandler}>
            <input type="text" className="border-black lg:w-[70%] w-[70%] p-1" value={input} id="" onChange={(e) => { setInput(e.target.value) }} placeholder='Enter your Item' />
            <button type="submit" className="bg-blue-500 lg:w-[25%] w-[30%] text-white p-1 rounded-sm">Add Items</button>
        </form>
    )
}


export default Form;