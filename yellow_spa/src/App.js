import React from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowDown, faArrowUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import imgAvatar from './common/images/img_avatar.png'
import DescriptionPage from "./Components/DescriptionPage";


function App() {
    // You can use any @media property
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const isMobile = useMediaQuery('(max-width: 599px)');
    const isTablet = !isDesktop && !isMobile;

    return (
        <div className="App">
            {/* <Navbar isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}
            <nav>
                <div className="navbar__logo">RAWG</div>
                <div className="navbar__container">
                    <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                    <input placeholder="Search for games" type="search" className="navbar__input"/>
                </div>
            </nav>
            <section>
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
            <main>
                {/*<section className='global__card__container'>*/}
                {/*    <div className="card">*/}
                {/*        <img className='card__image' src={imgAvatar} alt="Avatar" style={{width: '100%'}}/>*/}
                {/*        <div className="card__container">*/}
                {/*            <h2><b>Title</b></h2>*/}
                {/*            <div className='card__rating__date'>*/}
                {/*                <span>4.22</span>*/}
                {/*                <span>05.11.2021</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className='global__card__container'>
                    <div className="card">
                        <div>
                        <img className='card__image' src='https://media.rawg.io/media/screenshots/b7d/b7d0a152bde95710a936708c66897a4d.jpg' alt="Avatar"/>
                        </div>
                        <div className="card__container">
                            <h2><b>Title</b></h2>
                            <div className='card__rating__date'>
                                <span>4.22</span>
                                <span>05.11.2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                        <img className='card__image' src='https://media.rawg.io/media/screenshots/727/7278d0a6c35375ede5112518520c75ed.jpg' alt="Avatar" />
                        </div>
                        <div className="card__container">
                            <h2><b>Title</b></h2>
                            <div className='card__rating__date'>
                                <span>4.22</span>
                                <span>05.11.2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                        <img className='card__image' src="https://media.rawg.io/media/screenshots/fbe/fbe1e38e1b21d64c3660a5c01a2f28d7.jpg" alt="Avatar" />
                        </div>
                        <div className="card__container">
                            <h2><b>Title</b></h2>
                            <div className='card__rating__date'>
                                <span>4.22</span>
                                <span>05.11.2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                        <img className='card__image' src="https://media.rawg.io/media/screenshots/44b/44b2eff1df353a1b2b094b6abc401d2d.jpg" alt="Avatar" />
                        </div>
                        <div className="card__container">
                            <h2><b>Title</b></h2>
                            <div className='card__rating__date'>
                                <span>4.22</span>
                                <span>05.11.2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                        <img className='card__image' src="https://media.rawg.io/media/screenshots/0bb/0bb0e511659e70114fbd05de8a6331cc.jpg" alt="Avatar" />
                        </div>
                        <div className="card__container">
                            <h2><b>Title</b></h2>
                            <div className='card__rating__date'>
                                <span>4.22</span>
                                <span>05.11.2021</span>
                            </div>
                        </div>
                    </div>




                    {/*<i  area-hidden="true"></i>*/}
                    {/*<i area-hidden="true"></i>*/}
                    {/*<i area-hidden="true"></i>*/}


                </section>


            </main>




        </div>
    );
}

// Navbar component

// const Navbar = ({isDesktop, isTablet, isMobile}) => (
//   <nav className={
//     `base${isMobile ? ' mobile' : ''}${isTablet ? ' tablet' : ''}${isDesktop ? ' desktop' : ''}`
//   }>
//   </nav>
// );


export default App;