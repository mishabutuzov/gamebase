import { createSlice} from '@reduxjs/toolkit'

const defaultState = {
    selectedItemSort: 0,
    selectedItemPlatform: 0,
}


const dropdownSlice = createSlice({
    name: 'dropdownSlice',
    initialState: defaultState,
    reducers: {
        setSelectedItemSort: (state, action) => {
            state.selectedItemSort = action.payload;
        },
        setSelectedItemPlatform: (state, action) => {
            state.selectedItemPlatform = action.payload;
        }
    }
})

export const {setSelectedItemSort,setSelectedItemPlatform} = dropdownSlice.actions
export default dropdownSlice.reducer
