import React from 'react';
import { withFormik } from 'formik';
import { withStyles, TextField, Button } from '@material-ui/core';
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
  },
  button: {
    marginTop: '16px'
  }
});
const Login = ({
  values,
  classes,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  isSubmitting,
  errors
}) => {
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        label='email'
        type='email'
        onChange={handleChange}
        onBlur={handleBlur}
        name='email'
        value={values.email}
        fullWidth
      />
      {errors.email && touched.email && (
        <p className={classes.error}>{errors.email}</p>
      )}
      <TextField
        label='password'
        type='password'
        onChange={handleChange}
        onBlur={handleBlur}
        name='password'
        value={values.password}
        fullWidth
      />
      {errors.password && touched.password && (
        <p className={classes.error}>{errors.password}</p>
      )}
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        disabled={isSubmitting}
        type='submit'
      >
        Login
      </Button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('please provide valid email address')
      .required('Please Provide email'),
    password: Yup.string().required('please provide password')
  }),
  handleSubmit(values, { setSubmitting, setErrors, resetForm }) {
    setTimeout(() => {
      console.log(values);
      resetForm();
      setSubmitting(false);
    }, 2000);
  }
})(withStyles(styles)(Login));
