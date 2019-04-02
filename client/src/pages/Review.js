import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const payment = {
  true: 'Yes',
  false: 'No',
};

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

const Review = props => {
  const {
    classes,
    values,
    handleChange,
    errors: {errors},
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Order summary
      </Typography>
      <Typography variant="h6" gutterBottom>
        Duration: {`${values.duration} Months`}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Gigabytes: {`${values.gigabytes} GB`}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Upfront Payment: {payment[values.upfrontPayment]}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Price: {`$${values.computedPrice}`}
      </Typography>
      <br />
      <br />

      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            User Details
          </Typography>
          <Typography variant="h6" gutterBottom>{`${values.firstName} ${values.lastName}`}</Typography>
          <Typography variant="h6" gutterBottom>
            {values.email}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {values.streetAddr}
          </Typography>
        </Grid>

        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment key={values.creditNumber}>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Card number
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {values.creditNumber}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Expiry date
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {values.expDate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  CVV
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {values.cvv}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid item xs={12}>
          <FormControl required error={!errors.isValid} component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.checked}
                    color="secondary"
                    name="termsCheckbox"
                    onChange={handleChange('checked')}
                  />
                }
                label="I have read and accepted the Terms Agreement"
              />
            </FormGroup>
            <FormHelperText>{errors.errors.checked}</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Review);
