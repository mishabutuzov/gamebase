import React, {useEffect, useState} from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowDown, faArrowUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import imgAvatar from './common/images/img_avatar.png'
import DescriptionPage from "./Components/DescriptionPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoreGamesData, getAllGames} from "./Redux/gameReducer";
import Card from "./Components/Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const style = {
    height: 100,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

function App() {
    const [page, setPage] = useState(1);
    const [image, setImage] = useState([]);

    const gamesList = useSelector((state) => state.game.gamesList)
    console.log(gamesList, "tip" )
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllGames({page:1,pageSize:100}))
    // }, [dispatch])


    // You can use any @media property
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const isMobile = useMediaQuery('(max-width: 599px)');
    const isTablet = !isDesktop && !isMobile;




    const fetchMoreGames = () => {
            dispatch(fetchMoreGamesData({page:page}))
                setPage(page + 1);
    };


    return (
        <div className="App">
            {/*<div>{gamesList}</div>*/}

            {/* <Navbar isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}
            <nav className='main__nav'>
                <div className="navbar__logo">RAWG</div>
                <div className="navbar__container">
                    <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                    <input placeholder="Search for games" type="search" className="navbar__input"/>
                </div>
            </nav>
            <section className='filter__container__section'>
                <div className='filter__container'>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Order by: Date
                            <FontAwesomeIcon className='dropdown__arrow' icon={faAngleDown}/>
                        </button>

                        <div className="dropdown-content">
                            <a href="#">Rating <FontAwesomeIcon icon={faArrowUp}/></a>
                            <a href="#">Rating <FontAwesomeIcon icon={faArrowDown}/></a>
                            <a href="#">Date <FontAwesomeIcon icon={faArrowUp}/></a>
                            <a href="#">Date <FontAwesomeIcon icon={faArrowDown}/></a>
                        </div>
                    </div>
                </div>

                <div className='filter__container'>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Platform: All
                            <FontAwesomeIcon className='dropdown__arrow' icon={faAngleDown}/>
                        </button>

                        <div className="dropdown-content">
                            <a href="#">PC <FontAwesomeIcon icon={faArrowUp}/></a>
                            <a href="#">PlayStation <FontAwesomeIcon icon={faArrowDown}/></a>
                            <a href="#">Xbox <FontAwesomeIcon icon={faArrowUp}/></a>
                            <a href="#">iOS <FontAwesomeIcon icon={faArrowDown}/></a>
                        </div>
                    </div>
                </div>
            </section>
            <main className='global__main'>

                <section className='global__card__container'>
                    {/*<div className="card">*/}

                    {/*    <img className='card__image' src='https://media.rawg.io/media/screenshots/b7d/b7d0a152bde95710a936708c66897a4d.jpg' alt="Avatar"/>*/}

                    {/*    <div className="card__container">*/}
                    {/*        <h2><b>Title</b></h2>*/}
                    {/*        <div className='card__rating__date'>*/}
                    {/*            <span>4.22</span>*/}
                    {/*            <span>05.11.2021</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*{gamesList.map(item => <Card*/}
                    {/*    title={item.name}*/}
                    {/*rating={item.rating}*/}
                    {/*    avatar={item.background_image}*/}
                    {/*    timeStamp={item.released}*/}
                    {/*/>)}*/}

                    <InfiniteScroll
                        dataLength={gamesList.length}
                        next={fetchMoreGames}
                        hasMore={true}
                        loader={<h4>Loading</h4>}
                    >
                        {gamesList.map((i, index) => (
                            <div>
                                {/* <p>{i.url}</p> */}
                                <img style={style} src={i.url} />
                            </div>
                        ))}
                    </InfiniteScroll>







                    {/*<i  area-hidden="true"></i>*/}
                    {/*<i area-hidden="true"></i>*/}
                    {/*<i area-hidden="true"></i>*/}


                </section>

            </main>

        </div>
    )}



export default App;