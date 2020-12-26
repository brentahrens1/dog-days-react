//scss
import "../../sass/_control-panel.scss"

//components
import ControlBtns from "../ControlBtns/ControlBtns"
import ControlScreen from "../ControlScreen/ControlScreen"

const ControlPanel = () => {
    return (
        <div className="control-panel">
            <ControlBtns />
            <ControlScreen />
        </div>
    )
}

export default ControlPanel