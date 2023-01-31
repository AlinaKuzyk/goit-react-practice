import PropTypes from 'prop-types';
import TutorsItem from './TutorsItem';

const TutorList = ({ tutors, deleteTutor }) => {
  // console.log(tutors)
  return tutors.map(tutor => (
    <TutorsItem key={tutor.phone} {...tutor} deleteTutor={deleteTutor} />
  ));
};

export default TutorList;

TutorList.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({ phone: PropTypes.string.isRequired })
  ),
};
