import { BsPlusCircleFill } from "react-icons/bs"
import { ButtonEl } from './Button.styled'
import PropTypes from 'prop-types'

const Button = ({icon, text, type='button', action,styles, ...restProps}) => { 
   return (
      <ButtonEl className={styles} type={type} onClick={ action} {...restProps}>
         {icon && <BsPlusCircleFill />}
         {text}
</ButtonEl>
   )
}
 
export default Button
 
Button.propTypes = {
   icon: PropTypes.bool,
   text: PropTypes.string.isRequired,
   type: PropTypes.string,
   action: PropTypes.func,
   styles: PropTypes.string,
   restProps: PropTypes.any
}