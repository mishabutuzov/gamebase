// import {postAPI} from "../api/api";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {store} from "../index";



// export const fetchMoreData = async () => {
//     try {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
//         );
//         if (response) {
//             setImage([...image, ...response.data]);
//             setPage(page + 1);
//         }
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// };

export const fetchMoreGamesData = createAsyncThunk(
    'gameSlice/fetchMoreGamesData',
    async ({page}) => {
        console.log('THUNK')
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        return await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`, requestOptions)
            .then(res => res.json())
    }
);


// export const getAllGames = createAsyncThunk(
//     'gameSlice/getAllGames',
//     async ({page,pageSize}) => {
//         let requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//         }
//         return await fetch(`https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}&key=2602e4a916714a89a8d328d9f606b1aa`, requestOptions)
//             .then(res => res.json())
//     }
// );

const defaultState = {
    status:null,
    gamesList:[{url:'www.han.ru'}]
        // [{url:'www.han.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'},{url:'www.han1.ru'}],
    ,scrollPageMain:1
}


const gameSlice = createSlice({
    name: 'gameSlice',              //CHTO ETO????????????
    initialState: defaultState,  //OK!!!!!!!!!!!!!
    extraReducers: {
        [fetchMoreGamesData.pending]: (state, action) => {
            console.log('ZAPROS')
            state.status = 'loading'

        },
        [fetchMoreGamesData.fulfilled]: (state, {payload}) => {
            console.log(payload)

            state.gamesList = [...state.gamesList,...payload]
            console.log('POLUCHILI')
            state.status = 'success'
            state.scrollPageMain =  state.scrollPageMain + 1;
        },
        [fetchMoreGamesData.rejected]: (state, action) => {
            state.status = 'failed'
            console.log('OTPROS')

        },
    }
})

// export const { todoAdded, todoToggled } = gameSlice.actions
export default gameSlice.reducer