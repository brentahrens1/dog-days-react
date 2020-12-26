//scss
import "../../sass/_home.scss"

//components
import Frame from "../Frame/Frame"
import ControlPanel from "../ControlPanel/ControlPanel"

const Home = () => {
    return (
        <div className="home">
            <Frame />
            <ControlPanel />
        </div>
    )
}

export default Home