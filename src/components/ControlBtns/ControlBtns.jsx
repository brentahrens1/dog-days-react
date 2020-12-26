import ControlPanel from "../ControlPanel/ControlPanel"

//scss
import "../../sass/_control-btns.scss"

const ControlBtns = () => {
    return (
        <div className="control-btns">
            <button>Listen</button>
            <button>Download</button>
            <button>Credits</button>
            <button>Contact</button>
        </div>
    )
}

export default ControlBtns