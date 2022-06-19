import React from 'react';
import styled from "styled-components";

import android from './../../../common/images/platforms/android.svg'
import ios from './../../../common/images/platforms/ios.svg'
import linux from './../../../common/images/platforms/linux.svg'
import mac from './../../../common/images/platforms/mac.svg'
import nintendo from './../../../common/images/platforms/nintendo.svg'
import ps from './../../../common/images/platforms/ps.svg'
import win from './../../../common/images/platforms/win.svg'
import xbox from './../../../common/images/platforms/xbox.svg'
import web from './../../../common/images/platforms/web.svg'
import threedo from './../../../common/images/platforms/3do.svg'
import atari from './../../../common/images/platforms/atari.svg'
import commodore from './../../../common/images/platforms/commodore.svg'
import sega from './../../../common/images/platforms/sega.svg'


export const ParentPlatformsStyled = styled.span`
display: inline-block;
img{
height: 17px;
margin: 0 5px -4px 5px;
}
`

function ParentPlatforms({parentPlatforms}) {
    return (
        <ParentPlatformsStyled>
            {parentPlatforms.map((platform) => {
                    switch (platform) {
                        case "android":
                            return <img key={"android"} src={android} alt="android" />;
                        case "ios":
                            return <img key={'ios'} src={ios} alt="ios" />;
                        case "linux":
                            return <img key={"linux"} src={linux} alt="linux" />;
                        case "mac":
                            return <img key={"mac"} src={mac} alt="mac" />;
                        case "pc":
                            return <img key={"pc"} src={win} alt="win" />;
                        case "xbox":
                            return <img key={"xbox"} src={xbox} alt="xbox" />;
                        case "playstation":
                            return <img key={"playstation"} src={ps} alt="ps" />;
                        case "nintendo":
                            return <img key={"nintendo"} src={nintendo} alt="nintendo" />;
                        case "3do":
                            return <img key={"3do"} src={threedo} alt="3do" />;
                        case "atari":
                            return <img key={"atari"} src={atari} alt="atari" />;
                        case "commodore":
                            return <img key={"commodore"} src={commodore} alt="commodore" />;
                        case "web":
                            return <img key={"web"} src={web} alt="web" />;
                        case "sega":
                            return <img key={"sega"} src={sega} alt="sega" />;

                        default:
                            return null;
                    }
                }
            )}
        </ParentPlatformsStyled>
    );
}

export default ParentPlatforms;