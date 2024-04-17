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
        <form className="text-center w-[80%] mx-auto mb-3" onSubmit={submitHandler}>
            <input type="text" className="border-black lg:w-[78%] w-[70%] mr-2  p-1" value={input} id="" onChange={(e) => { setInput(e.target.value) }} />
            <button type="submit" className="bg-blue-400 lg:w-[20%] w-[auto%] text-white p-1 rounded-sm">Add Items</button>
        </form>
    )
}


export default Form;