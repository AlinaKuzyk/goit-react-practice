import PropTypes from 'prop-types';

const Main = ({ children }) => <main>{children}</main>;

export default Main;

Main.propTypes = {
   children: PropTypes.node
}