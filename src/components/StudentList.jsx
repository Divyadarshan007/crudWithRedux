import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteStudent } from "../features/students/studentSlice";

const StudentList = () => {
    const students = useSelector((store) => store.students.list)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
    }

    return (
        <div>
            <h1 className="text-3xl text-center py-5">Student List</h1>
            <div className="flex justify-end container mx-auto">
                <button onClick={() => navigate('/add-student')} className="border rounded p-3 px-5 bg-blue-600 text-white font-medium">Student List</button>
            </div>
            <div className="relative overflow-x-auto container mx-auto py-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((std) => {
                                return <tr key={std.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {std.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {std.course}
                                    </td>
                                    <td className="px-6 py-4">
                                        {std.age}
                                    </td>
                                    <td className="px-6 py-4 flex gap-5">
                                        <Link to={`/edit-student/${std.id}`} className="text-blue-700 font-semibold text-md">Edit</Link>
                                        <button className="text-rose-700 font-semibold text-md" onClick={() => {
                                            handleDelete(std.id)
                                        }}>Delete</button>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StudentList