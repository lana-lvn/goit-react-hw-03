import { Form, Formik, Field } from "formik";
import s from "./contactForm.module.css"
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const initialValues = { name: "", number: "" };

const ContactsSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = ({ onAdd }) => {

  const handleSubmit = (values, actions) => { 
    
    const newContact = { id: nanoid(), ...values };

    onAdd(prev => ([...prev, newContact]));
     
    actions.resetForm;
    
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactsSchema}>
      <Form className={s.form}>
        <div>
          <label htmlFor={nameId}>Name</label>
        <Field id={nameId} type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div>
           <label htmlFor={numberId}>Number</label>
        <Field id={numberId} type="text" name="number" className={s.input}/>
          <ErrorMessage name="number" component="span" className={s.error} />
       </div>
        <button className={s.add} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm;
