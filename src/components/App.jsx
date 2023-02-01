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
    isModalOpen: null,
  };

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

  addCity = name => {
    if (
      this.state.cities.some(
        city => city.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This city exist');
    } else {
      const newCity = { text: name };
      this.setState(prev => ({
        cities: [...prev.cities, newCity],
      }));
    }
  };

  addDepartment = name => {
    if (
      this.state.departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This department exist');
    } else {
      const newDepartment = { text: name };
      this.setState(prev => ({
        departments: [...prev.departments, newDepartment],
      }));
    }
  };

  handleDeleteCard = (id, relation) => {
    //  console.log(relation);
    this.setState(prev => ({
      [relation]: prev[relation].filter(({ text }) => text !== id),
    }));
  };

  toggleModal = action => {
    this.setState({ isModalOpen: action });
  };

  render() {
    // console.log(this.state.cities)
    // console.log(this.state.departments)
    const { cities, departments, tutors, isModalOpen } = this.state;
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
            <TutorList deleteTutor={this.deleteTutor} tutors={tutors} />
            {this.state.showForm === 'tutor-form' && (
              <TutorForm addTutor={this.addTutor} />
            )}
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
              toggleModal={this.toggleModal}
              isModalOpen={isModalOpen}
            />
            {this.state.showForm === 'city-form' && (
              <InfoForm
                title="Добавление города"
                placeholder="город"
                onSubmit={this.addCity}
              />
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
              toggleModal={this.toggleModal}
              isModalOpen={isModalOpen}
            />
            {this.state.showForm === 'department-form' && (
              <InfoForm
                title="Добавление филиала"
                placeholder="филиал"
                onSubmit={this.addDepartment}
              />
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
