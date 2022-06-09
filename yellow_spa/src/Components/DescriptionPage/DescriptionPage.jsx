import React, {useEffect, useLayoutEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getGameDetails, getGameScreenshots, resetDetailsToDefault} from "../../Redux/gameDetailsReducer";
import './descriptionpage.css'
import Carousel, {CarouselItem} from "../Carousel/Carousel";
import parse from 'html-react-parser'


function DescriptionPage(props) {
    let {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {status : statusText, title, description, rating, website, reddit_url, released, developers_name, genres_name, esrb_rating_name} = useSelector(state => state.details)
    const {isMobile, isTablet, isDesktop} = useSelector(state => state.media);
    const {status : statusScreenshots ,screenshots} = useSelector(state => state.details)

    console.log(statusText,'test selector')

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
        <>
            {statusText === 'loading' && <div className="loader"></div>}

            {statusText === 'failed' && <div className="error">
                <div>Server error. Please&nbsp; <span style={{fontWeight: 700, textDecoration: 'underline'}}
                                                      onClick={() => fetchDescriptionData()}>restart</span> &nbsp;the page.
                </div>
            </div>}

            {statusText === 'success' &&
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
            </div>}
        </>
    );
}

export default DescriptionPage;