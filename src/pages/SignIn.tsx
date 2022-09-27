import React from 'react';
import { makeStyles } from '@mui/material/styles'
import { Typography, Button, FormGroup, FormControl, TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import ModalBlock from 

export const useStylesSignIn = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		height: '100vh'
	},
	blueSide: {
		backgroundColor: '#71C9F8',
		display: 'flex',
		alignItems: 'center',
		jstifyContent: 'center',
		flex: '0 0 50%',
		overflow: 'hidden',
		position: 'relative,'
	},
	blueSideBigIcon: {
		position: 'absolute',
		left: '50%',
		top: '53%',
		transform: 'translate(-50%, -50%)',
		width: '350%',
		height: '350%',
	},
	blueSideListInfo: {
		position: 'relative',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 380,
		'& h6': {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700,
			fontSize: 20,
		}
	},
	blueSideListInfoItem: {
		marginBottom: 40,
	},
	blueSideListInfoIcon: {
		fontSize: 32,
		marginRight: 15,
	},
	loginSide: {
		display: 'flex',
		alignItems: 'center',
		jstifyContent: 'center',
		flex: '0 0 50%',
	},
	loginSideTwitterIcon: {
		fontSize: 45,
	},
	loginSideWrapper: {
		width: 380,
	},
	loginSideTitle: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 60,
		marginTop: 20
	}, 
	loginSideField: {
		marginBottom: 18,
	},
	registerField: {
		marginBottom: theme.spacing(5),
	},
	loginFormControl: {
		marginBottom: theme.spacing(2)
	}
}))

const SignIn = () => {
	const [open, setOpen] = React.useState(false)
	const classes = useStylesSignIn()
  
	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClickClose = () => {
		setOpen(false)
	}

  return (
    <div className={classes.wrapper}>
	    <section className={classes.blueSide}>
	    	<TwitterIcon color="primary" className={classes.blueSideBigIcon} />
		    <ul className={classes.blueSideListInfo}>
		    	<li className={classes.blueSideListInfoItem}>
		    		<Typography variant="h6">
		    			<SearchIcon className={classes.blueSideListInfoIcon} />
		    			Read about what interests you
		    		</Typography>
		    	</li>
		    	<li className={classes.blueSideListInfoItem}>
		    		<Typography variant="h6">
		    			<PeopleIcon className={classes.blueSideListInfoIcon} />
		    			Find out what the world is talking about
		    		</Typography>
		    	</li>
		    	<li className={classes.blueSideListInfoItem}>
		    		<Typography variant="h6">
		    			<MessageIcon className={classes.blueSideListInfoIcon} />
		    			Join the conversation
		    		</Typography>
		    	</li>
		    </ul>
	    </section>
	    <section className={classes.loginSide}>
	    	<div className={classes.loginSideWrapper}>
	    		<TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
		    	<Typography className={classes.loginSideTitle} variant="h4">
		    		Find out what is happening in the world right now
		    	</Typography>
		    	<Typography>
		    		<b>Join Twitter right now</b>
		    	</Typography>
		    	<br />
		    	<Button variant="contained" color="primary" fullWidth>
		    		Зареєструватися
		    	</Button>
		    	<Button onClick={handleClickOpen} variant="outlined" color="primary">
		    		Увійти
		    	</Button>

		    	<ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Увійти в акаунт">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Створіть обліковий запис">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Далі
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>


	    	</div>
	    </section>
    </div>
  );
}

export default SignIn;