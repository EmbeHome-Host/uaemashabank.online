import PropTypes from 'prop-types';

const MainContent = ({ selectedItem }) => {
  return (
    <span>{selectedItem ? selectedItem.name : 'Summary'}</span>
  );
};

MainContent.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default MainContent;
