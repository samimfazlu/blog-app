import React from 'react';
import { withFormik } from 'formik';
import { TextField, withStyles, Button } from '@material-ui/core';
import * as Yup from 'yup';

const styles = theme => ({
  root: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  field: {
    marginBottom: theme.spacing(2)
  },
  textArea: {
    minWidth: '400px'
  },
  error: {
    margin: '0',
    fontSize: '0.75rem',
    marginTop: '8px',
    minHeight: '1em',
    textAlign: 'left',
    color: '#f44336',
    fontWeight: '400',
    lineHeight: '1em',
    letterSpacing: '0.03333em'
  }
});

const Register = ({
  classes,
  values,
  errors,
  handleSubmit,
  handleBlur,
  handleChange,
  touched,
  isSubmitting
}) => {
  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
      autoComplete='off'
    >
      <TextField
        error={errors.firstName && touched.firstName ? true : false}
        name='firstName'
        type='text'
        className={classes.field}
        label='firstName'
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
        value={values.firstName}
        helperText='FirstName Must be 2-5 character'
      />
      <TextField
        error={errors.lastName ? true : false}
        type='text'
        name='lastName'
        label='lastName'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        fullWidth
      />
      {errors.lastName && touched.lastName && (
        <div className={classes.error}>{errors.lastName}</div>
      )}
      <TextField
        error={errors.email && touched.email ? true : false}
        name='email'
        label='email'
        type='email'
        className={classes.field}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        fullWidth
      />
      {/* {errors.email && touched.email && <div id='feedback'>{errors.email}</div>} */}
      <TextField
        error={errors.password ? true : false}
        type='password'
        name='password'
        className={classes.field}
        label='password'
        value={values.password}
        onChange={handleChange}
        fullWidth
        helperText='password Must be 2-10 character'
      />
      <TextField
        error={errors.confirmPassword ? true : false}
        type='password'
        name='confirmPassword'
        label='confirmPassword'
        onChange={handleChange}
        className={classes.field}
        value={values.confirmPassword}
        fullWidth
        helperText='ConfirmPassword Must be 2-5 character'
      />
      <Button
        variant='contained'
        color='primary'
        type='submit'
        disabled={isSubmitting}
      >
        Register
      </Button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Name must be 2 character')
      .max(10, 'Name must be less than 10 character')
      .required('FistName is required'),
    lastName: Yup.string()
      .min(2, 'Name must be 2 character')
      .required('LastName is required'),
    email: Yup.string()

      .email('Must be a valid Email')
      .required('Email is required'),
    password: Yup.string()
      .min(2)
      .max(20)
      .required('password is Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "password don't match")
      .required('Confirm Password Must be a match')
  }),
  handleSubmit(values, { setSubmitting }) {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    });
  }
})(withStyles(styles)(Register));
