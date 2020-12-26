//scss
import "../../sass/_control-panel.scss"

//components
import ControlBtns from "../ControlBtns/ControlBtns"

const ControlPanel = () => {
    return (
        <div className="control-panel">
            <ControlBtns />
        </div>
    )
}

export default ControlPanel