// import {postAPI} from "../api/api";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const defaultState = {
    statusScreenshots:null,
    status: null,
    currentGameId:1,
    title:'',
    rating:0,
    description:'',
    website:'',
    screenshots:[],
    reddit_url:'',
    released:'',
    developers_name:'',
    genres_name:'',
    esrb_rating_name:'',
    metacritic:'',
    parentPlatforms:[],
    playtime:''
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

export const getGameScreenshots = createAsyncThunk(
    'gameDetailsSlice/getGameScreenshots',
    async ({id}, {getState}) => {

        // const selectedPlatform = getState().game.selectedPlatform;
        const BASE_URL = 'https://api.rawg.io/api/games/';

        let url = new URL(`${BASE_URL}${id}/screenshots`);

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
        resetDetailsToDefault: (state, action) => {
            state.title = '';
            state.description = '';
            state.rating = '';
            state.website = '';
            state.screenshots = []
        }
    },
    extraReducers: {
        [getGameDetails.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getGameDetails.fulfilled]: (state, {payload}) => {
            state.title = payload.name
            state.description = payload.description
            state.rating = payload.rating
            state.website = payload.website
            state.reddit_url = payload.reddit_url
            state.released = payload.released?.replaceAll("-", ".").split(".").reverse().join(".")
            state.metacritic = payload.metacritic

            state.developers_name = payload.developers[0].name
            state.genres_name = payload.genres[0]?.name
            state.esrb_rating_name = payload.esrb_rating?.name
            state.playtime = payload.playtime


            state.parentPlatforms = payload.parent_platforms.map(platform => platform.platform.slug)


            // console.log(payload)
            state.status = 'success'
        },
        [getGameDetails.rejected]: (state, action) => {
            state.status = 'failed'
        },



        [getGameScreenshots.pending]: (state, action) => {
            state.statusScreenshots = 'loading'
        },
        [getGameScreenshots.fulfilled]: (state, {payload}) => {
            state.screenshots = payload.results.map(el=> ({original : el.image, thumbnail: el.image}))

            // console.log(payload)
            state.statusScreenshots = 'success'
        },
        [getGameScreenshots.rejected]: (state, action) => {
            state.statusScreenshots = 'failed'
        },
    }
})

export const {resetDetailsToDefault} = gameDetailsSlice.actions
export default gameDetailsSlice.reducer
