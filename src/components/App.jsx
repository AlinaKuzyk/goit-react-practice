import { Component } from 'react';
import {
  SideBar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
  GeneralCardList,
  Button,
  TutorForm,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';

class App extends Component {
  state = {
    cities:
      universityData.cities.map(city => ({
        text: city,
      })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
        text: name,
      })) ?? [],

    tutors: universityData.tutors ?? [],
  };

  // логика для кнопки Edit
  onEdit = () => console.log('Edit');
  onDelete = () => console.log('Delete');
  onToggleMenu = () => console.log('Card');
  // логика для кнопки addTutor
  addTutor = tutor => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors, tutor],
      };
    });
  };

  render() {
    // console.log(this.state.cities)
    // console.log(this.state.departments)
    //  console.log(universityData)
    const { cities, departments, tutors } = this.state;
    return (
      <div className="app">
        <SideBar></SideBar>
        <Main>
          <Section isRightPosition isRow title="Информация о университете">
            <UniversityCard
              name={universityData.name}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
            />

            <Paper>
              <span>{universityData.description}</span>
            </Paper>
          </Section>

          <TutorForm addTutor={this.addTutor} />

          <Section image={tutorIcon} title="Преподаватели">
            <TutorList tutors={tutors} />
            <Button text="Добавить преподавателя" icon />
          </Section>

          <Section>
            <GeneralCardList
              listData={cities}
              isOpenDropDown={this.onToggleMenu}
            />
            <Button text="Добавить город" icon />
          </Section>

          <Section>
            <GeneralCardList
              listData={departments}
              isOpenDropDown={this.onToggleMenu}
            />
            <Button text="Добавить факультет" icon />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
