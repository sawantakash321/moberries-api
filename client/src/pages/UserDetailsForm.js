import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const UserDetailsForm = props => {
  const {
    values,
    handleChange,
    errors: {errors},
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter User Details
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="firstName"
            margin="normal"
            variant="outlined"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            error={values.firstName === ''}
            helperText={errors.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lastName"
            margin="normal"
            variant="outlined"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            error={values.lastName === ''}
            helperText={errors.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            type="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={handleChange('email')}
            defaultValue={values.email}
            error={values.email === ''}
            helperText={errors.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="streetAddr"
            name="streetAddr"
            label="Street Address"
            fullWidth
            autoComplete="user-details address street-addr"
            margin="normal"
            variant="outlined"
            onChange={handleChange('streetAddr')}
            defaultValue={values.streetAddr}
            error={values.streetAddr === ''}
            helperText={errors.errors.streetAddr}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

UserDetailsForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserDetailsForm;
