import React, {useEffect} from "react";
import useMediaQuery from "./useMediaQuery";
import {setMedia} from "../Redux/mediaReducer";
import {useDispatch} from "react-redux";

const useMediaControl = () => {
    const dispatch = useDispatch();
    // You can use any @media property
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isMobile = useMediaQuery("(max-width: 425px)");
    const isTablet = !isDesktop && !isMobile;

    useEffect(() => {
        dispatch(
            setMedia({
                isDesktop,
                isMobile,
                isTablet,
            })
        );
    }, [isDesktop, isMobile]);

}

export default useMediaControl;