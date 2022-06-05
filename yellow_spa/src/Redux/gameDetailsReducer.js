// import {postAPI} from "../api/api";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const defaultState = {
    status: null,
    currentGameId:1,
    title:'',
    rating:0,
    description:''
}

export const getGameDetails = createAsyncThunk(
    'gameDetailsSlice/getGameDetails',
    async ({id}, {getState}) => {

        // const selectedPlatform = getState().game.selectedPlatform;

        const BASE_URL = 'https://api.rawg.io/api/games/';

        let url = new URL(`${BASE_URL}${id}`);

        url.searchParams.append('key', '2602e4a916714a89a8d328d9f606b1aa');

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        return await fetch(url, requestOptions)
            .then(res => res.json())
    }
);


const gameDetailsSlice = createSlice({
    name: 'gameDetailsSlice',
    initialState: defaultState,
    reducers: {
        setSearchInput: (state, action) => {
            state.page = 1;
            state.gamesList = [];
            state.searchInput = action.payload;
        }
    },
    extraReducers: {
        [getGameDetails.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getGameDetails.fulfilled]: (state, {payload}) => {
            state.title = payload

            console.log(payload)
            state.status = 'success'
        },
        [getGameDetails.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export const {setSearchInput} = gameDetailsSlice.actions
export default gameDetailsSlice.reducer
