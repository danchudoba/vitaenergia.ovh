import styles from '@/styles/Form_BMI.module.css'

export default function form_BMI(props) {

  function submitForm(e) {
    e.preventDefault();

    const newBasicInfoForm = {
      age: e.target.age.value,
      weight: e.target.weight.value,
      height: e.target.height.value,
      gender: e.target.gender.value,
      inches: e.target.inches.checked,
    };

    props.handleBasicInfoForm({ ...newBasicInfoForm });
  }



  return (
    <>
      <h2>BMI form</h2>
      <h3>Put your basic info in this form.</h3>
      <p>It doesn't bite. And maybe you also shouldn't do it so often to all those sandwitches? Or maybe you are in a great shape and just want to have fun with this form? Come on, check it out. I've spent some time researching it.</p>
      <form onSubmit={submitForm} className={styles.form_basic_info}>
        <label htmlFor="age">Age:</label>
        <input type="number" id="form-age" name="age" />
        <label htmlFor="weight">Weight:</label>
        <input type="number" id="form-weight" name="weight" />
        <label htmlFor="weight">Height:</label>
        <input type="number" id="form-height" name="height" />

        <input type="checkbox" id="form-checkbox" name="inches" />
        <label htmlFor="inches">inches</label>

        <legend>Gender:</legend>
        <div>
          <input type="radio" id="woman" name="gender" value="woman"
            defaultChecked />
          <label htmlFor="woman">Woman</label>
        </div>
        <div>
          <input type="radio" id="man" name="gender" value="man" />
          <label htmlFor="man">Man</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}