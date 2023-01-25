import { SideBar, Main, Paper, UniversityCard, TutorList } from '../components';
import universityData from '../constants/universityData.json'

export const App = () => {
   console.log(universityData)
   // логика для кнопки Edit
   const onEdit = () => console.log('Edit')
   const onDelete = () => console.log('Delete')



  return (
    <div className="app">
      <SideBar></SideBar>
      <Main>
           <UniversityCard name={universityData.name}
              onEdit={onEdit}
              onDelete={ onDelete} />
        <Paper>
              <span>{ universityData.description}</span>
           </Paper>

           <TutorList tutors={universityData.tutors}  />
         
      </Main>
    </div>
  );
};

export default App;
