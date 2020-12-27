//scss
import "../../sass/_frame.scss"

//images
import frameImg from "../../assets/images/cover/cover-frame.png"

//components
import Cover from "../Cover/Cover"

const Frame = () => {
    return (
        <div className="frame">
            <div className="frame__cover">
                <img src={frameImg} alt="Dog Days Frame" />
            </div>
            <div className="frame__cover-inner">
                <Cover />
            </div>
        </div>
    )
}

export default Frame