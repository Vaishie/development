import {useState} from "react";
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   }
 
   return errors;
 };

export default function CommentsForm({newComment}) {
    // let [formData, setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating: 1
    // });
    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 1,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
    //let [isValid, setIsValid]=useState(true);

    // let handleInputChange = (event) => {
    //     setFormData((currData)=>{
    //         return {...currData, [event.target.name]: event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     // if(!formData.username){
    //     //     console.log("empty!!");
    //     //     setIsValid(false);
    //     //     event.preventDefault();
    //     //     return;
    //     // }
    //     newComment(formData);
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 1
    //     })
    // }

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username </label>
                <input placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
                {/* {!isValid && <p style={{color: "red"}}>Username cannot be empty!</p>}*/} <br></br>
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
                <br></br>
                <label htmlFor="remarks">Remarks </label>
                <textarea value={formik.values.remarks} placeholder="add your remark"  onChange={formik.handleChange} id="remarks" name="remarks"></textarea>
                <br></br>
                <br></br>
                <label htmlFor="rating">Rating </label>
                <input placeholder="rating" type="number" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"/>
                <br></br>
                <br></br>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}