import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import {computePrice} from '../utils/computePrice';
import {
  validateOrderDetailsInput,
  validatePaymentDetailsInput,
  validateReviewInput,
  validateUserDetailsInput,
} from '../validation/validator';
import OrderDetailsForm from './OrderDetailsForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import UserDetailsForm from './UserDetailsForm';

const styles = theme => ({
  connectorActive: {
    '& $connectorLine': {
      borderColor: theme.palette.secondary.main,
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: theme.palette.grey[100],
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Order details', 'User details', 'Payment details', 'Review your order'];

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    firstName: '',
    lastName: '',
    email: '',
    streetAddr: '',
    duration: 12,
    gigabytes: 5,
    upfrontPayment: false,
    computedPrice: 0,
    creditNumber: '',
    expDate: '',
    cvv: '',
    checked: false,
    errors: {},
  };

  componentDidMount() {
    this.setState((state, props) => ({
      computedPrice: computePrice(state.duration, state.gigabytes, state.upfrontPayment),
    }));
  }
  validate = () => {
    let clientErrors = {};
    let {
      activeStep,
      firstName,
      lastName,
      email,
      streetAddr,
      duration,
      gigabytes,
      upfrontPayment,
      creditNumber,
      expDate,
      cvv,
      checked,
    } = this.state;

    switch (activeStep) {
      case 0:
        clientErrors = validateOrderDetailsInput({duration, gigabytes, upfrontPayment});
        this.setState(state => ({
          ...state,
          errors: clientErrors,
        }));
        break;
      case 1:
        clientErrors = validateUserDetailsInput({firstName, lastName, email, streetAddr});
        this.setState(state => ({
          ...state,
          errors: clientErrors,
        }));
        break;
      case 2:
        clientErrors = validatePaymentDetailsInput({creditNumber, expDate, cvv});
        this.setState(state => ({
          ...state,
          errors: clientErrors,
        }));
        break;
      case 3:
        clientErrors = validateReviewInput({checked});
        this.setState(state => ({
          ...state,
          errors: clientErrors,
        }));
        break;
      default:
        console.log('default case');
        break;
    }

    return clientErrors.isValid;
  };

  saveOrderToDB = order => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post('http://127.0.0.1:5000/api/orders', order)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleNext = () => {
    if (this.validate()) {
      // Check if this is the last step and then submit
      if (this.state.activeStep === 3) {
        const {
          firstName,
          lastName,
          email,
          streetAddr,
          duration,
          gigabytes,
          upfrontPayment,
          creditNumber,
          expDate,
          cvv,
        } = this.state;
        const order = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          streetAddr: streetAddr,
          duration: duration,
          gigabytes: gigabytes,
          upfrontPayment: upfrontPayment,
          creditNumber: creditNumber,
          expDate: expDate,
          cvv: cvv,
        };
        this.saveOrderToDB(order);
      }
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  // Handle fields change
  handleChange = input => e => {
    let elementName = e.target.name;

    if (elementName === 'termsCheckbox') {
      this.setState({[input]: e.target.checked});
    } else if (elementName === 'duration' || elementName === 'gigabytes' || elementName === 'upfrontPayment') {
      this.setState({[input]: e.target.value});
      this.setState((state, props) => ({
        computedPrice: computePrice(state.duration, state.gigabytes, state.upfrontPayment),
      }));
    } else {
      this.setState({[input]: e.target.value});
    }
  };

  getStepContent = step => {
    const {
      firstName,
      lastName,
      email,
      streetAddr,
      duration,
      gigabytes,
      upfrontPayment,
      creditNumber,
      expDate,
      cvv,
      checked,
      computedPrice,
      errors,
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      streetAddr,
      duration,
      gigabytes,
      upfrontPayment,
      creditNumber,
      expDate,
      cvv,
      checked,
      computedPrice,
    };

    switch (step) {
      case 0:
        return <OrderDetailsForm handleChange={this.handleChange} values={values} errors={{errors}} />;
      case 1:
        return <UserDetailsForm handleChange={this.handleChange} values={values} errors={{errors}} />;
      case 2:
        return <PaymentForm handleChange={this.handleChange} values={values} errors={{errors}} />;
      case 3:
        return <Review handleChange={this.handleChange} values={values} errors={{errors}} />;
      default:
        throw new Error('Unknown step');
    }
  };

  render() {
    const {classes} = this.props;
    const {activeStep} = this.state;
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Moberries cloud music provider
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper} connector={connector}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                      {activeStep === steps.length - 1 ? 'Confirm & Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
