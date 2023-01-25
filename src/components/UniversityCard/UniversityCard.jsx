import PropTypes from 'prop-types';
import css from './UniversityCard.module.css'
import universityIcon from '../../assets/images/mock-university.svg'
import editButtonIcon from '../../assets/images/edit.svg'
import deleteButtonIcon from '../../assets/images/delete.svg'
import { Container } from "./UniversityCard.styled"
import { UniIcon } from "./UniversityCard.styled"

const UniversityCard = ({name, onDelete, onEdit}) => { 
   return (
      <Container>
         <UniIcon src={universityIcon} alt="" />
         <span className={css.uniName} >университет</span>
         <h3 className={css.uniTitle}>{name}</h3>
         <div className="controls">
            {/* для вызова функции onEdit мы добавили onClick и функция будет 
            срабатывать только при нажатии на кнопку */}
            <button className={css.editButton} type="button" onClick={()=> onEdit()}>
               <img src={editButtonIcon} alt="EditButton" />
            </button>
            <button className={css.deleteButton} type="button" onClick={()=> onDelete()}>
               <img src={deleteButtonIcon} alt="DeleteButton" />
            </button>
         </div>
      </Container>
   )
}

export default UniversityCard

UniversityCard.propTypes = {
   name: PropTypes.string.isRequired,
   onDelete: PropTypes.func,
   onEdit: PropTypes.func
}