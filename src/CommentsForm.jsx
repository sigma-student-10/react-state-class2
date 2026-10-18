import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty';
   }
   return errors;
 };

export default function CommentsForm({addNewComment}) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate, 
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //       username: "",
  //       remarks: "",
  //       rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a comments</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username" >Username</label>
        <br></br>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleSubmit}
          id="username"
          name="username"
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br></br>
        <br></br>

        <label htmlFor="remarks" >Remarks</label>
        <br></br>
        <textarea
          value={formik.values.remarks}
          placeholder="add few remarks"
          onChange={formik.handleSubmit}
          id="remarks"
          name="remarks"
        ></textarea>
        <br></br>
        <br></br>

        <label htmlFor="rating" >Rating</label>
        <br></br>
        <input
          placeholder="rating"
          type="number"
          min="1"
          max="5"
          value={formik.values.rating}
          onChange={formik.handleSubmit}
          id="rating"
          name="rating"
        />
        <br></br>
        <br></br>

        <button type="submit" >Add comments</button>
      </form>
    </div>
  );
}
