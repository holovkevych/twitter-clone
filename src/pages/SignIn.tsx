import React from 'react';
import { makeStyles } from '@mui/material/styles'
import { Typography, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';

const useStylesSignIn = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		height: '100%'
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
		overflow: 'hidden',
	},
	loginSideTwitterIcon: {
		fontSize: 45,
	},
	loginSideWrapper: {
		width: 380
	},
	loginSideTitle: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 60,
		marginTop: 20
	}
}))

const SignIn = () => {
	const classes = useStylesSignIn()
  
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
		    		Sign up
		    	</Button>
		    	<Button variant="outlined" color="primary">
		    		Sign in
		    	</Button>
	    	</div>
	    </section>
    </div>
  );
}

export default SignIn;