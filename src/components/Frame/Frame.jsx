//scss
import "../../sass/_frame.scss"

//images
import frameImg from "../../assets/images/cover/cover-frame.png"

//components
import Cover from "../Cover/Cover"
import Listen from "../Listen/Listen"
import Download from "../Download/Download"
import Credits from "../Credits/Credits"
import Contact from "../Contact/Contact"

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