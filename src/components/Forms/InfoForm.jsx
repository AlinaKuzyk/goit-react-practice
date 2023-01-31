import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';
import { ErrMessage } from './TutorFormStyled.styled';

const InfoForm = ({ onSubmit, title, placeholder }) => {
  const initialValues = { name: '' };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    //   в values будет обьект с заполненными данными о преподавателе
    //  console.log(values);
    resetForm();
    setSubmitting(false);
  };

  const validationSchemeForm = object().shape({
    name: string().min(2, 'необходимо ввести более 2-х символов'),
  });

  return (
    <Formik
      validationSchema={validationSchemeForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({
        values,

        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form>
          <div>
            <h3>{title}</h3>
            <Field
              type="text"
              id={placeholder}
              name="name"
              placeholder={placeholder}
              onBlur={handleBlur}
              value={values.name || ''}
              onChange={handleChange}
            />
            <ErrMessage component="div" name="name" />
          </div>
          <Button text="Add" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
