import React, {useEffect, useLayoutEffect} from 'react';
import Carousel, {CarouselItem} from "./Carousel/Carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getGameDetails, getGameScreenshots, resetDetailsToDefault} from "../Redux/gameDetailsReducer";
import loadingImg from '../common/images/loading.jpg'
import parse from 'html-react-parser'

function DescriptionPage(props) {
    let {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const title = useSelector(state => state.details.title);
    const description = useSelector(state => state.details.description);
    const rating = useSelector(state => state.details.rating);
    const website = useSelector(state => state.details.website);

    const screenshots = useSelector(state => state.details.screenshots)

    const fetchDescriptionData = async () => {
        await dispatch(getGameDetails({id}))
        await dispatch(getGameScreenshots({id}))
    };

    useEffect(() => {
        fetchDescriptionData()
            .then(() => console.log('fetchDescriptionData DONE'));
    }, [])

    useLayoutEffect(() => {
        return () => {
            // Your code here.
            dispatch(resetDetailsToDefault())
            console.log('UNMOUNT')

        }
    }, [])


    return (
        <div className='description__main__div'>
            <nav className='main__nav'>
                <div className="navbar__logo" onClick={
                    () => {
                        navigate('/')
                    }
                }>RAWG
                </div>
                <div className="navbar__container">
                    <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                    <input placeholder="Search for games" type="search" className="navbar__input"/>
                </div>
            </nav>

            <section className='description__page__global__container'>
                <div className='description__page__container'>
                    <div className='description__page__container__title'><b>
                        {title}
                    </b>
                    </div>
                    <div className='description__page__container__rating'>
                        {rating}
                    </div>
                </div>

                <Carousel>
                    {!screenshots.length
                        ? <CarouselItem><img
                            style={{width: '100%', objectFit: 'cover'}}
                            src={loadingImg}
                            alt=""/></CarouselItem>
                        : screenshots.map((el, i) => <CarouselItem key={i}><img
                            style={{width: '100%', objectFit: 'cover'}}
                            src={el}
                            alt=""/></CarouselItem>)}

                </Carousel>
            </section>


            <section className='about__section'>
                <h2>About</h2>
                <span>
                    {parse(description)}


                </span>
            </section>

            <section className='website__section'>
                <h2>Website</h2>
                <span>
                    <a target="_blank" rel="noopener noreferrer" className='desc__link' href={website}>{website}</a>
                </span>
            </section>
        </div>
    );
}

export default DescriptionPage;