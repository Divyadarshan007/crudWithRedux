import { useSelector } from "react-redux"
import StudentList from "./components/StudentList"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddStudents from "./components/AddStudents"

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add-student" element={<AddStudents/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App