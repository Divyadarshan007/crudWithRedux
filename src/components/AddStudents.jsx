import { useState } from "react"
import { useDispatch } from "react-redux"
import { addStudent } from "../features/students/studentSlice";
import { useNavigate } from "react-router-dom";

const AddStudents = () => {

    const [input, setInput] = useState({
        name: '', age: '', course: ''
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(input))
        navigate('/')


    }
    return (
        <div className="bg-[#111827] py-10 h-screen">
            <h1 className="text-white text-3xl my-5 text-center text-">Student Form</h1>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input onChange={handleChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="name@flowbite.com"  />
                </div>
                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your age</label>
                    <input onChange={handleChange} type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "  />
                </div>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="course" onChange={handleChange} className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ">
                        <option value="">Choose a country</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="UI / UX">UI/UX</option>
                        <option value="AI / ML / DS">AI/ML/DS</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddStudents