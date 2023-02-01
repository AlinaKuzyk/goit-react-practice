import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({
  listData,
  isOpenDropDown,
  onDeleteCard,
  toggleModal,
  isModalOpen,
}) => {
  return (
    <ul>
      {listData.map(({ text, relation }) => (
        <GeneralCardItem
          id={text}
          key={text}
          text={text}
          isOpenDropDown={isOpenDropDown}
          onDeleteCard={onDeleteCard}
          relation={relation}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      ))}
    </ul>
  );
};

export default GeneralCardList;
