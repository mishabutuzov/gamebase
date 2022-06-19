import React from "react";
import "./Slider.css";
import { useSelector} from "react-redux";

import {    AboutInfo,
    Container,
    GameInfo,
    GameTitleDiv,
    LinksInfo,
    SliderMain,} from "./descriptionStyled";
import GameInfoContent from "./GameInfo/GameInfoContent";
import GameAboutContent from "./GameAbout/GameAboutContent";
import GameLinksContent from "./GameLinks/GameLinksContent";
import "react-image-gallery/styles/css/image-gallery.css";
import MyGallery from "./MyGallery/MyGallery";
import {copyText} from "../Helpers/copyText";
import TitleWithAlert from "../Helpers/TitleWithAlert";
import Authors from "./Authors/Authors";

function DescriptionPagePure() {

    const {metacritic,
        title,
        description,
        rating,
        website,
        reddit_url,
        released,
        developers_name,
        genres_name,
        esrb_rating_name,
        parentPlatforms,
        playtime,  } = useSelector((state) => state.details);
    const isAboutFullWidth = !website && !reddit_url;
    const {isMobile, isDesktop} = useSelector((state) => state.media);
    const {screenshots} = useSelector((state) => state.details);

    const copyTextHandler = () => {
        copyText(title);
    };

    return (
        <>
            <GameTitleDiv>
                <TitleWithAlert title={title} copyTextHandler={copyTextHandler}/>
            </GameTitleDiv>

            <Container isAboutFullWidth={isAboutFullWidth}>
                <GameInfo>
                    <GameInfoContent
                        released={released}
                        developers_name={developers_name}
                        genres_name={genres_name}
                        esrb_rating_name={esrb_rating_name}
                        rating={rating}
                        metacritic={metacritic}
                        parentPlatforms={parentPlatforms}
                        playtime={playtime}
                    />
                </GameInfo>
                <SliderMain>
                    <MyGallery
                        screenshots={screenshots}
                        isMobile={isMobile}
                        isDesktop={isDesktop}
                    />
                </SliderMain>
                <AboutInfo>
                    <GameAboutContent description={description}/>
                </AboutInfo>
                {!isAboutFullWidth && (
                    <LinksInfo>
                        <GameLinksContent website={website} reddit_url={reddit_url}/>
                    </LinksInfo>
                )}
            </Container>
            <Authors/>
        </>
    );
}

export default DescriptionPagePure;