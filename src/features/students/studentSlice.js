import { createSlice, nanoid } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        list: []
    },
    reducers: {
        addStudent: (state, action) => {
            state.list.push({id:nanoid, ...action.payload})

        },
        deleteStudent: (state, action) => {
            state.list = state.list.filter((std)=>{
                return std.id != action.payload
            })
        }
    }
})
export const { addStudent, deleteStudent } = studentSlice.actions
export default studentSlice.reducer;