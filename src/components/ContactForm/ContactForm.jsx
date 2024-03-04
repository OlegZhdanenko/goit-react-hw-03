import { Formik ,Form , Field ,ErrorMessage } from "formik"
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone";
import css from "../ContactForm/ContactForm.module.css"
export default function ContactForm({ onAdd }) {
  
    const nameFieldId = useId();
    const phoneFieldId = useId();
  
  const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  
});
    const initialValues = {
      name: "",
      number: ""
      
};


    
  const handleSubmit = (values, actions) => {
    onAdd(values)
    actions.resetForm();
  }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.list}> 
                <label htmlFor={nameFieldId} className={css.label}>Name</label>
          <Field type="text" name="name" id={nameFieldId}  className={css.input}/>
          <ErrorMessage name="name" component="span" className={css.messege}/>
                <label htmlFor={phoneFieldId} className={css.label}>Number</label>
          <Field type="tell" name="number"  className={css.input}/>
          <ErrorMessage name="number" component="span" className={css.messege}/>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}