import React, {useEffect, useLayoutEffect, useState} from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import {useDispatch, useSelector} from "react-redux";
import {getAllGames, setPage} from "./Redux/gameReducer";
import Card from "./Components/Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Components/Search/Search";
import Filters from "./Components/Filters/Filters";

function App() {
    // const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15); //pageSize for all project

    const gamesList = useSelector((state) => state.game.gamesList)
    const searchInput = useSelector((state)=> state.game.searchInput)
    const page = useSelector((state) => state.game.page)
    const count = useSelector((state => state.game.count))
    const isEndOfList = useSelector(state => state.game.isEndOfList)
    const selectedPlatform = useSelector(state => state.game.selectedPlatform)
    const selectedSort = useSelector(state => state.game.selectedSort)


    const dispatch = useDispatch()


    useLayoutEffect(() => {
        dispatch(getAllGames({page, pageSize, search:searchInput}))
        dispatch(setPage(page+1))
        console.log("!!!!!!useLayoutEffect!!!!!", page)
    }, [dispatch,searchInput, selectedPlatform,selectedSort])





    return (
        <div className="App">

            <Filters/>
            <main className='global__main'>
                <InfiniteScroll
                    dataLength={gamesList.length}
                    next={
                        () => {
                            dispatch(getAllGames({page, pageSize,search:searchInput}))
                            dispatch(setPage(page + 1));
                        }}
                    hasMore={!isEndOfList}
                    loader={(count < 1 ) ? <h4 className="rainbow">Games not found</h4> : <h4 className="rainbow">Loading...</h4>}
                    endMessage={
                        <h4 className="rainbow">🚧 END OF LIST 🚧</h4>
                    }
                >
                    <section className='global__card__container'>
                        {gamesList.map((item,i) => <Card
                            key={i}
                            id={item.id}
                            title={item.name}
                            rating={item.rating}
                            avatar={item.background_image}
                            timeStamp={item.released}
                        />)}
                    </section>
                </InfiniteScroll>

            </main>
        </div>
    )
}


export default App;