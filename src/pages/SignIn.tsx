import React from 'react';
import { Typography, Button, FormGroup, FormControl, TextField } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';

import { ModalBlock } from '../components/ModalBlock'
import styled from '@emotion/styled'
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

const	BlueSide = styled.section`
  background-color:#71C9F8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  overflow: hidden;
  position: relative;
`

const BlueSideListInfo = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 380px;
  
  h6 {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 20;
  }
`
const BlueSideListInfoItem = styled.li`
  margin-bottom: 40;
`

const	LoginSide = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
`
const	LoginSideWrapper = styled.div`
  width: 380px;
`

export const SignIn = () => {
	const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

	const handleClickOpenSignIn = () => {
		setVisibleModal('signIn')
	}

	const handleClickOpenSignUp = () => {
		setVisibleModal('signUp')
	}

  const handleCloseModal = ():void => {
    setVisibleModal(undefined)
  }

  return (
    <Wrapper>
	    <BlueSide>
	    	<TwitterIcon color="primary" 
            sx={{ 
              position: 'absolute',
              left: '50%',
              top: '53%',
              transform: 'translate(-50%, -50%)',
              width: '250%',
              height: '250%',
            }} />
		    <BlueSideListInfo>
		    	<BlueSideListInfoItem>
		    		<Typography variant="h6">
		    			<SearchIcon sx={{ fontSize: 32, marginRight: 10 }} />
		    			Читайте про те, що вас цікавить
		    		</Typography>
		    	</BlueSideListInfoItem>
		    	<BlueSideListInfoItem>
		    		<Typography variant="h6">
		    			<PeopleIcon sx={{ fontSize: 32, marginRight: 10 }} />
              Дізнайтеся, про що говорять у світі
		    		</Typography>
		    	</BlueSideListInfoItem>
		    	<BlueSideListInfoItem>
		    		<Typography variant="h6">
		    			<MessageIcon sx={{ fontSize: 32, marginRight: 10 }} />
		    			Приєднуйтеся до спілкування
		    		</Typography>
		    	</BlueSideListInfoItem>
		    </BlueSideListInfo>
	    </BlueSide>
	    <LoginSide>
	    	<LoginSideWrapper>
	    		<TwitterIcon color="primary" sx={{ fontSize: 32 }} />
		    	<Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
               		fontSize: 32,
               		marginBottom: 5,
               		marginTop: 20
                }} >
		    		Дізнайтеся, що відбувається в світі прямо зараз
		    	</Typography>
		    	<Typography>
		    		<b>Приєднуйтеся до Твіттера прямо зараз</b>
		    	</Typography>
		    	<br />
		    	<Button 
              onClick={handleClickOpenSignUp}
              //sx={{ marginBottom: 20 }}
              variant="contained" 
              color="primary" 
              fullWidth>
		    		Зареєструватися
		    	</Button>
		    	<Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
		    		Увійти
		    	</Button>

		    	 <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            title="Увійти в акаунт">
            <FormControl 
                  component="fieldset" 
                  sx={{ marginRight: theme.spacing(2) }}
                  fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ marginRight: 18 }}
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
                  sx={{ marginRight: 18 }}
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
            //classes={classes}
            title="Створіть обліковий запис">
            <FormControl  
              component="fieldset" 
              sx={{ marginRight: theme.spacing(2) }}
              fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ marginRight: theme.spacing(5) }}
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
                  sx={{ marginRight: theme.spacing(5) }}
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
                  sx={{ marginRight: theme.spacing(5) }}
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
	    	</LoginSideWrapper>
	    </LoginSide>
    </Wrapper>
  )
}