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
  InfoForm,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';

class App extends Component {
  state = {
    cities:
      universityData.cities.map(city => ({
        text: city,
        relation: 'cities',
      })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
        text: name,
        relation: 'departments',
      })) ?? [],

    tutors: universityData.tutors ?? [],
    showForm: null,
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

  deleteTutor = name => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors].filter(({ firstName }) => firstName !== name),
      };
    });
  };

  handleShowForm = name => {
    this.setState(prev => ({ showForm: prev.showForm === name ? null : name }));
  };

  handleDeleteCard = (id, relation) => {
    //  console.log(relation);
    this.setState(prev => ({
      relation: prev[relation].filter(({ text }) => text !== id),
    }));
  };

  render() {
    // console.log(this.state.cities)
    // console.log(this.state.departments)
    //  console.log(universityData)
    const { cities, departments, tutors } = this.state;
    console.log(this.state.cities);
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

          {this.state.showForm === 'tutor-form' && (
            <TutorForm addTutor={this.addTutor} />
          )}

          <Section image={tutorIcon} title="Преподаватели">
            <TutorList
              onDeleteCard={this.handleDeleteCard}
              deleteTutor={this.deleteTutor}
              tutors={tutors}
            />
            <Button
              action={() => this.handleShowForm('tutor-form')}
              text={
                this.state.showForm === 'tutor-form'
                  ? 'Закрыть'
                  : 'Добавить преподавателя'
              }
              icon
            />
          </Section>

          <Section>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={cities}
              isOpenDropDown={this.onToggleMenu}
            />
            {this.state.showForm === 'city-form' && (
              <InfoForm title="Добавление города" placeholder="город" />
            )}
            <Button
              action={() => this.handleShowForm('city-form')}
              text={
                this.state.showForm === 'city-form'
                  ? 'Закрыть'
                  : 'Добавить город'
              }
              icon
            />
          </Section>

          <Section>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={departments}
              isOpenDropDown={this.onToggleMenu}
            />
            {this.state.showForm === 'department-form' && (
              <InfoForm title="Добавление филиала" placeholder="филиал" />
            )}
            <Button
              action={() => this.handleShowForm('department-form')}
              text={
                this.state.showForm === 'department-form'
                  ? 'Закрыть'
                  : 'Добавить факультет'
              }
              icon
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
