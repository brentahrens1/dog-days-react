//scss
import "../../sass/_cover.scss"

//images
import background from "../../assets/images/cover/background-main.png"
import car from "../../assets/images/cover/car.png"
import tree from "../../assets/images/cover/tree.png"
import cloud1 from "../../assets/images/cover/cloud1.png"
import cloud2 from "../../assets/images/cover/cloud2.png"
import cloud3 from "../../assets/images/cover/cloud3.png"
import cloud4 from "../../assets/images/cover/cloud4.png"
import cloud5 from "../../assets/images/cover/cloud5.png"

const Cover = () => {
    return (
        <div className="cover">
            <div className="image background">
                <img src={background} alt="filler" />
            </div>
            <div className="image car">
                <img src={car} alt="filler" />
            </div>
            <div className="image tree">
                <img src={tree} alt="filler" />
            </div>
            <div className="image cloud1">
                <img src={cloud1} alt="filler" />
            </div>
            <div className="image cloud2">
                <img src={cloud2} alt="filler" />
            </div>
            <div className="image cloud3">
                <img src={cloud3} alt="filler" />
            </div>
            <div className="image cloud4">
                <img src={cloud4} alt="filler" />
            </div>
            <div className="image cloud5">
                <img src={cloud5} alt="filler" />
            </div>
        </div>
    )
}

export default Cover