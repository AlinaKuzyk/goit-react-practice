import GeneralCardItem from './GeneralCardItem'

const GeneralCardList = ({ listData, isOpenDropDown }) => { 
   // console.log(listData)
   return (
      <ul>
         {listData.map(({text}) => 
            <GeneralCardItem key={text } text = {text} isOpenDropDown={isOpenDropDown}/>
         )}
     </ul>
   )
 }

export default GeneralCardList