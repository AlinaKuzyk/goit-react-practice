import PropTypes from 'prop-types';
import { Paper } from 'components';
import { Container, ColumnItem } from './TutorsItem.styled';

const TutorsItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
  deleteTutor,
}) => {
  // console.log(firstName)
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <span>{lastName}</span>
          <span>{firstName}</span>
          <span>{patronymic}</span>
        </ColumnItem>
        <ColumnItem>
          <span>{phone}</span>
          <span>{email}</span>
          <span>{city}</span>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
        <ColumnItem>
          <button type="button" onClick={() => deleteTutor(firstName)}>
            Видалити
          </button>
        </ColumnItem>
      </Container>
    </Paper>
  );
};

export default TutorsItem;

TutorsItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string,
};
