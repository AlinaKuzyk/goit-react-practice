import { Paper } from "components"
import { BsThreeDotsVertical } from "react-icons/bs"

const GeneralCardItem = ({text, isOpenDropDown}) => { 
   return (
      <Paper>
         <li>
            <span>{text}</span>
            <button onClick={isOpenDropDown}>
              <BsThreeDotsVertical/>
            </button>
         </li>
      </Paper>

   )
 }

export default GeneralCardItem