import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system';
import { Grid, Paper, TextField, Typography } from '@mui/material'

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const Home  = () => {
  

  // const SearchTextField = styled(TextField)`
  //   input: {
  //     border-radius: 30;
  //     background-color: red
  //   } 
  // `

  // const CssTextField = styled(TextField)({
  //   borderRadius: '30px',
  //   '& label.Mui-focused': {
  //     color: 'green',
  //     borderRadius: '30px',
  //     backgroundColor: 'red',
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: 'green',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: 'red',
  //     },
  //     '&:hover fieldset': {
  //       borderColor: 'yellow',
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: 'green',
  //     },
  //   },
  // });

  const TweetWrapper = styled(Paper)`
    border-radius: 0;
    height: 100%;
    border-top: 0;
    border-bottom: 0;
  `
  const TweetHeader = styled(Paper)`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    padding: '10px 15px';

    h6 {
      font-weight: 800;
      margin-left: 10px;
    }
  `


  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
      <Grid item xs={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={6}>
        <TweetWrapper variant='outlined'>
          <TweetHeader>
            <Typography variant='h6'>Головна</Typography>
          </TweetHeader>
          {[
            ...new Array(20).fill(
              <Tweet
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti dolor ipsa sint voluptates illo ullam distinctio porro sed dignissimos? Eveniet, qui? Nobis omnis, dolorem blanditiis dolorum vitae dolor in!"
                user={{
                  fullname: "Jony Boy", 
                  username: "@jonyboy",
                  avatarUrl: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              }}/>
            )
          ]}
        </TweetWrapper>
      </Grid>
      <Grid item xs={3}>
          <TextField
            sx={{
              input: {
              borderRadius: 30,
              //backgroundColor: 'lightgray'
            },
            borderBottom: "none"
            }}
            id="filled-search"
            label="Пошук по твітеру"
            type="search"
            variant="filled"
          />
      </Grid>
      </Grid>
    </Container>
  )
}