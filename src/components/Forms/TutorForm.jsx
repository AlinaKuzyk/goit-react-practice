import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FieldStyled, ErrMessage } from './TutorFormStyled.styled';
import { object, string, number, date, InerType } from 'yup';
import { Button } from 'components';

const fieldsData = [
  { name: 'lastName', label: 'Прізвище' },
  { name: 'firstName', label: 'Імʼя' },
  { name: 'patronymic', label: 'По-батькові' },
  { name: 'phone', label: 'Телефон' },
  { name: 'email', label: 'Емеіл' },
  { name: 'city', label: 'Місто' },
];

const validationSchemeForm = object().shape({
  firstName: string().required('Заполните это поле'),
  lastName: string()
    .min(2, 'Необходимо минимум 2 символа')
    .max(9, 'Превышено максимальное количество символов')
    .required('Заполните это поле'),
  patronymic: string().required(),
  phone: number().required(),
  email: string().required(),
  city: string().required(),
});

const TutorForm = ({ addTutor }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    addTutor(values);
    //   в values будет обьект с заполненными данными о преподавателе
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationSchemeForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form>
          <h3>Добавление преподавателя </h3>
          {fieldsData.map(({ name, label }) => {
            return (
              <div key={name}>
                <FieldStyled
                  type="text"
                  id={name}
                  name={name}
                  placeholder={label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values[name] || ''}
                />
                <ErrMessage component="div" name={name} />
              </div>
            );
          })}
          <Button text="Add" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default TutorForm;
