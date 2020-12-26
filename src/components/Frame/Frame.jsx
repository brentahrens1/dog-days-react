//scss
import "../../sass/_frame.scss"

//images
import frameImg from "../../assets/images/cover/cover-frame.png"

const Frame = () => {
    return (
        <div className="frame">
            <div className="frame__cover">
                <img src={frameImg} alt="Dog Days Frame" />
            </div>
        </div>
    )
}

export default Frame