import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const duration = [
  {
    value: '3',
    label: '3',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '12',
    label: '12',
  },
];

const gigabytes = [
  {
    value: '3',
    label: '3',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '50',
    label: '50',
  },
];

const upfrontPayment = [
  {
    value: 'true',
    label: 'Yes',
  },
  {
    value: 'false',
    label: 'No',
  },
];

const OrderDetailsForm = props => {
  const {
    values,
    handleChange,
    errors: {errors},
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select subscription parameters:
      </Typography>
      <br />
      <Grid container spacing={24} alignItems="center" direction="column" justify="center">
        <Grid item xs={12}>
          <TextField
            id="duration"
            select
            label="Duration"
            value={values.duration}
            onChange={handleChange('duration')}
            name="duration"
            margin="normal"
            variant="outlined"
            error={values.duration === ''}
            helperText={'Please select the duration in Months' + (errors.isValid === false ? errors.duration : ' ')}>
            {duration.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="gigabytes"
            select
            label="Gigabytes"
            name="gigabytes"
            value={values.gigabytes}
            onChange={handleChange('gigabytes')}
            margin="normal"
            variant="outlined"
            error={values.gigabytes === ''}
            helperText={
              `Please select the amount of gigabytes for ${values.duration} Months` +
              (errors.isValid === false ? errors.gigabytes : ' ')
            }>
            {gigabytes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="upfrontPayment"
            select
            label="Upfront Payment"
            name="upfrontPayment"
            value={values.upfrontPayment}
            onChange={handleChange('upfrontPayment')}
            margin="normal"
            variant="outlined"
            error={values.upfrontPayment === ''}
            helperText={'Would you like to pay Upfront?' + (errors.isValid === false ? errors.upfrontPayment : ' ')}>
            {upfrontPayment.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
        </Grid>
        <br />
        <Typography variant="h6" gutterBottom>
          Total price: {`$${values.computedPrice}`}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

OrderDetailsForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OrderDetailsForm;
