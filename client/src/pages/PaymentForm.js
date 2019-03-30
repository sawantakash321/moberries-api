import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const PaymentForm = props => {
  const {
    values,
    handleChange,
    errors: {errors},
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            type="number"
            id="creditNumber"
            label="Credit Card Number"
            value={values.creditNumber}
            onChange={handleChange('creditNumber')}
            name="creditNumber"
            margin="normal"
            fullWidth
            placeholder="Enter 16 digit card number"
            variant="outlined"
            error={values.creditNumber === ''}
            helperText={errors.errors.creditNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            id="expDate"
            label="Credit Card Expire Date"
            value={values.expDate}
            onChange={handleChange('expDate')}
            placeholder="Enter date in MMYYYY format"
            name="expDate"
            margin="normal"
            variant="outlined"
            error={values.expDate === ''}
            helperText={errors.errors.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            id="cvv"
            label="CVV"
            value={values.cvv}
            onChange={handleChange('cvv')}
            placeholder="Enter 3 digit CVV number "
            name="cvv"
            margin="normal"
            variant="outlined"
            error={values.cvv === ''}
            helperText={errors.errors.cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PaymentForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentForm;
