import { Paper } from 'components';
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
    const { text, id, onDeleteCard, relation } = this.props;
    //  console.log(id);
    //  console.log(relation);
    return (
      <Paper>
        <Item>
          <span>{text}</span>
          <BtnMenu onClick={this.toggleDropDown}>
            <BsThreeDotsVertical />
          </BtnMenu>
          {this.state.showDropDown && (
            <ContainerDropdown>
              <InsideBtn type="button">
                <Edit /> Редактировать
              </InsideBtn>
              <InsideBtn
                onClick={() => onDeleteCard(id, relation)}
                type="button"
              >
                <Delete />
                Удалить
              </InsideBtn>
            </ContainerDropdown>
          )}
        </Item>
      </Paper>
    );
  }
}

export default GeneralCardItem;
