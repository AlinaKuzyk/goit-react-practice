import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled'
import cn from 'classnames'

const Section = ({title, image,isRightPosition, isRow, children}) => { 
   return (
      <SectionStyled isRow={isRow}>
      <h2 className={cn('title',{title_right: isRightPosition}) } >
         {image && <img src={image} alt={title} />}{title}
         </h2>
      
      <div className='section_row'>{children}</div>
   </SectionStyled>
   )
 }

export default Section

Section.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   isRightPosition: PropTypes.bool,
   isRow: PropTypes.bool,
   children: PropTypes.node
}