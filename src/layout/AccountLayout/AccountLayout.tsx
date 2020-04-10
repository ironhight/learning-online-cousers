import * as React from 'react';

// import { withTranslation, WithTranslation } from 'react-i18next';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
// import queryString from 'query-string';

type Props = {
  history: any;
};

type State = {
  form: string;
  loading: boolean;
  emailFromQueryString: string;
  token: string;
  password: any;
  rePassword: any;
  showPassword: boolean;
  validateError: boolean;
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        ironhight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AccountLayout: React.FC<Props> = () => {
  const [values, setValues] = React.useState<State>({
    form: 'singin',
    loading: false,
    emailFromQueryString: '',
    validateError: false,
    token: '',
    password: {
      hasShow: false,
      hasMix: false,
      hasSpecialCharacters: false,
      hasAtLeast8Characters: false,
    },
    rePassword: {
      hasShow: false,
      hasMix: false,
      hasSpecialCharacter: false,
      hasAtLeast8Characters: false,
    },
    showPassword: false,
  });
  let history = useHistory();
  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { emailFromQueryString, password } = values;
    console.log('_handleSubmit -> password', password);
    console.log('_handleSubmit -> email', emailFromQueryString);
    history.push('/');
  };

  const _handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const classes = useStyles();

  console.log('run signin');

  // const inputProps = {
  //   onblur : validateError= values.emailFromQueryString ?  true : false

  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            id="auth__form-control-input"
            label="Email"
            type="text"
            variant="outlined"
            onChange={handleChange('emailFromQueryString')}
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            // helperText={
            //   values.emailFromQueryString ? '' : 'email ko duoc trong'
            // }
            // error={values.emailFromQueryString ? false : true}
            // onBlur={true}
            // inputProps={onblur: true}
          />
          <TextField
            id="auth__form-control-input"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            variant="outlined"
            onChange={handleChange('emailFromQueryString')}
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={_handleClickShowPassword}
                    // onMouseDown={_handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default AccountLayout;
