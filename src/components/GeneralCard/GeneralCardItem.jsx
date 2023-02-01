import { Paper, Modal, InfoForm, Button } from 'components';
import { Component } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import {
  Item,
  BtnMenu,
  ContainerDropdown,
  InsideBtn,
} from './GeneralCardItem.styled';

class GeneralCardItem extends Component {
  state = {
    showDropDown: false,
  };

  toggleDropDown = () => {
    this.setState(({ showDropDown }) => ({
      showDropDown: !showDropDown,
    }));
  };

  render() {
    const { text, id, onDeleteCard, relation, toggleModal, isModalOpen } =
      this.props;

    return (
      <Paper>
        <Item>
          <span>{text}</span>
          <BtnMenu onClick={this.toggleDropDown}>
            <BsThreeDotsVertical />
          </BtnMenu>
          {this.state.showDropDown && (
            <ContainerDropdown>
              <InsideBtn type="button" onClick={() => toggleModal('edit')}>
                <Edit /> Редактировать
              </InsideBtn>
              {isModalOpen === 'edit' && (
                <Modal
                  toggleModal={toggleModal}
                  title={`Редактировать информацию о ${
                    relation === 'cities' ? 'городе' : 'факультете'
                  }`}
                  children={
                    <InfoForm
                      title={relation === 'cities' ? 'Город ' : 'Факультет'}
                    />
                  }
                />
              )}
              <InsideBtn onClick={() => toggleModal('delete')} type="button">
                <Delete />
                Удалить
              </InsideBtn>
              {isModalOpen === 'delete' && (
                <Modal
                  toggleModal={toggleModal}
                  title={
                    relation === 'cities'
                      ? 'Удаление города '
                      : 'Удаление факультета'
                  }
                  children={`Будут удалены все материалы и информация ${
                    relation === 'cities' ? 'городе' : 'факультете'
                  } `}
                  actions={
                    <>
                      <Button
                        action={onDeleteCard(id, relation)}
                        type="button"
                        text="Да"
                      />
                      <Button action={toggleModal} type="button" text="Нет" />
                    </>
                  }
                />
              )}
            </ContainerDropdown>
          )}
        </Item>
      </Paper>
    );
  }
}

export default GeneralCardItem;
