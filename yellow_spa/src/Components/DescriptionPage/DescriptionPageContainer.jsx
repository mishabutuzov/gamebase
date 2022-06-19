import React, {useEffect, useLayoutEffect} from "react";
import {useParams} from "react-router-dom";
import "./Slider.css";
import {useDispatch, useSelector} from "react-redux";
import {
    getGameDetails,
    getGameScreenshots,
    resetDetailsToDefault,
} from "../../Redux/gameDetailsReducer";

import "react-image-gallery/styles/css/image-gallery.css";
import {LoaderStyled} from "../Helpers/LoaderStyled";
import Error from "../Helpers/Error";
import DescriptionPagePure from "./DescriptionPagePure";

function DescriptionPageContainer() {
    let {id} = useParams();
    const dispatch = useDispatch();

    const {status: statusText} = useSelector((state) => state.details);

    const fetchDescriptionData = async () => {
        await dispatch(getGameDetails({id}));
        await dispatch(getGameScreenshots({id}));
    };

    useEffect(() => {
        fetchDescriptionData().then(() => {
            // console.log("fetchDescriptionData DONE")
        });
    }, []);

    useLayoutEffect(() => {
        return () => {
            dispatch(resetDetailsToDefault());
            console.log("DETAILS PAGE UNMOUNT");
        };
    }, []);

    return (
        <>
            {statusText === "loading" && <LoaderStyled isDescription={false}/>}
            {statusText === "failed" && (
                <Error fetchDescriptionData={fetchDescriptionData}/>
            )}

            {statusText === "success" && <DescriptionPagePure/>}
        </>
    );
}

export default DescriptionPageContainer;