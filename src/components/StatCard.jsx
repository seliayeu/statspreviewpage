import { React } from "react"
import "./StatCard.css"
import cardImage from "../resources/image-header-desktop.jpg"
import useWindowDimensions from "../util/windowDimensions" 

// the following two functions are adapted from 
// https://stackoverflow.com/a/36862446 licensed under CC BY-SA 4.0

const StatCard = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div className={ `${width > 1152 ? "statCard" : "statCardMobile"} ${width < 1152 && height < 800 ? "statCardMobileSmaller" : "" }` }>
            <div className={ width > 1152 ? "cardText" : "cardTextMobile" }>
                <h1 className={ width > 1152 ? "" : "mobileText" }>Get <b>insights</b> that  help your business grow.</h1>
                <p className={ width > 1152 ? "" : "mobileText" }>Discover the benefits of data analytics and make better decisions regarding revenue, 
                    customer experience, and overall efficiency.</p>
                <div className={ width > 1152 ? "statRow" : "statColumn" }>
                    <div className={ width > 1152 ? "statInfoColumn" : "statInfoColumnMobile" }>
                        <h2 className={ width > 1152 ? "" : "mobileText " }>10k+</h2>
                        <h4 className={ width > 1152 ? "" : "mobileText " }>COMPANIES</h4>
                    </div>
                    <div className={ width > 1152 ? "statInfoColumn" : "statInfoColumnMobile" }>
                    <h2 className={ width > 1152 ? "" : "mobileText " }>314</h2>
                        <h4 className={ width > 1152 ? "" : "mobileText " }>TEMPLATES</h4>
                    </div>
                    <div className={ width > 1152 ? "statInfoColumn" : "statInfoColumnMobile" }>
                        <h2 className={ width > 1152 ? "" : "mobileText " }>12M+</h2>
                        <h4 className={ width > 1152 ? "" : "mobileText " }>QUERIES</h4>
                    </div>                                                            
                </div>
            </div>
            <div className={ width > 1152 ? "cardImageOverlay" : "cardImageOverlayMobile" }>
                <img src={ cardImage } alt="women in a work environment with computers" className="cardImage"></img>
            </div>
        </div>
    )
}

export default StatCard