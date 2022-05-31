import React from 'react';
import Carousel, {CarouselItem} from "./Carousel/Carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function DescriptionPage(props) {
    return (
        <div>
            <nav>
                <div className="navbar__logo">RAWG</div>
                <div className="navbar__container">
                    <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                    <input placeholder="Search for games" type="search" className="navbar__input"/>
                </div>
            </nav>

            <section className='description__page__container'>
                <div className='description__page__container__title'><b>
                    TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </b>
                </div>
                <div>
                    5.22
                </div>
            </section>

            <Carousel>
                <CarouselItem><img style={{width: '100%', objectFit: 'cover'}}
                                   src="https://media.rawg.io/media/screenshots/b7d/b7d0a152bde95710a936708c66897a4d.jpg"
                                   alt=""/></CarouselItem>
                {/*<CarouselItem><img style={{height: 'auto', width: 'auto'}} src="https://media.rawg.io/media/screenshots/727/7278d0a6c35375ede5112518520c75ed.jpg" alt=""/></CarouselItem>*/}
                <CarouselItem><img style={{width: '100%', objectFit: 'cover'}}
                                   src="https://media.rawg.io/media/screenshots/727/7278d0a6c35375ede5112518520c75ed.jpg"
                                   alt=""/></CarouselItem>
                <CarouselItem><img style={{width: '100%', objectFit: 'cover'}}
                                   src="https://media.rawg.io/media/screenshots/727/7278d0a6c35375ede5112518520c75ed.jpg"
                                   alt=""/></CarouselItem>
            </Carousel>

            <section className='about__section'>
                <h2>About</h2>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa cum deserunt doloribus laudantium magni nesciunt nobis non nulla, obcaecati quasi qui sunt suscipit velit voluptatibus? Assumenda cumque impedit quam.
                </span>
            </section>


        </div>
    );
}

export default DescriptionPage;