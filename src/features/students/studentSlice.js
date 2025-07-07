import { createSlice, nanoid } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        list: []
    },
    reducers: {
        addStudent: (state, action) => {
            state.list.push({id: nanoid(), ...action.payload})

        },
        deleteStudent: (state, action) => {
            state.list = state.list.filter((std)=>{
                return std.id != action.payload
            })
        },
        updateStudent: (state, action) => {
              const {id, ...data} = action.payload

                const idx = state.list.findIndex((std)=>{
                    return std.id === id;
                })
              
                state.list[idx] = {id, ...data}
                
        }
    }
})
export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions
export default studentSlice.reducer;