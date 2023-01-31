import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({ listData, isOpenDropDown, onDeleteCard }) => {
  // console.log(listData)
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
        />
      ))}
    </ul>
  );
};

export default GeneralCardList;
