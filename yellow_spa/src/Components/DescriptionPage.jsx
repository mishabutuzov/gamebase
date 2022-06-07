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
// import '../index.css'

function DescriptionPage(props) {
    let {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const title = useSelector(state => state.details.title);
    const description = useSelector(state => state.details.description);
    const rating = useSelector(state => state.details.rating);
    const website = useSelector(state => state.details.website);
    const reddit_url = useSelector(state => state.details.reddit_url);
    const released = useSelector(state => state.details.released);
    const developers_name = useSelector(state => state.details.developers_name);
    const genres_name = useSelector(state => state.details.genres_name);
    const esrb_rating_name = useSelector(state => state.details.esrb_rating_name);

    const isMobile = useSelector(state => state.media.isMobile);
    const isTablet = useSelector(state => state.media.isTablet);
    const isDesktop = useSelector(state => state.media.isDesktop);

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
            dispatch(resetDetailsToDefault())
            console.log('UNMOUNT')
        }
    }, [])


    return (
        <div className='description__main__div'>

            <section className='description__page__global__container'>
                <div className='description__page__container'>
                    <div className='description__page__container__title'><b>
                        <h1>{title}</h1>
                    </b>
                    </div>

                    {isDesktop && (
                        <div className="desktop__info">

                            <p>Released: <span>{released}</span></p>
                            <p>Developer: <span>{developers_name}</span></p>
                            <p>Genre: <span>{genres_name}</span></p>
                            <p>Age rating: <span>{esrb_rating_name}</span></p>
                            <p>Rating: <span>{rating}</span></p>
                        </div>
                    )}

                    {!isDesktop && <div className='description__page__container__rating'>
                        Rating: {rating}
                    </div>}
                </div>

                <Carousel>
                    {/*{!screenshots.length*/}
                    {/*    ? <CarouselItem><img*/}
                    {/*        style={{width: '100%', objectFit: 'cover'}}*/}
                    {/*        src={loadingImg}*/}
                    {/*        alt=""/></CarouselItem>*/}
                    {/*    : screenshots.map((el, i) => <CarouselItem key={i}><img*/}
                    {/*        style={{width: '100%', objectFit: 'cover'}}*/}
                    {/*        src={el}*/}
                    {/*        alt=""/></CarouselItem>)}*/}

                    {screenshots.map((el, i) => <CarouselItem key={i}><img
                        className='carousel__img'

                            src={el}
                            alt=""/></CarouselItem>)}

                </Carousel>
            </section>


            <section className='about__section'>
                <h2>About</h2>
                <span>
                    {parse(description)}


                </span>

                <h2>Website</h2>
                <h4>
                    <a target="_blank" rel="noopener noreferrer" className='desc__link' href={website}>{website}</a>
                </h4>

                <h2>Reddit: </h2>
                <h4>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="desc__link"
                        href={reddit_url}
                    >
                        {reddit_url}
                    </a>
                </h4>
            </section>
        </div>
    );
}

export default DescriptionPage;