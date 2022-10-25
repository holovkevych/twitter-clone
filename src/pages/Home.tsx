import React from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/system';
import { Avatar, Button, Divider, Grid, InputBase, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material'

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import SearchTextField from '../components/SearchTextField';
import PersonAddIcon from '@mui/icons-material/PersonAddOutlined';
import { AddTweetForm } from '../components/AddTweetForm';

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

  const AddForm = styled(Paper)`
    padding: 20px;
  `
  const AddFormBottomLine = styled.div`
    height: 12px;
    background-color: #E6ECF0;
  `

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
  const RightSide = styled.div`
    position: sticky;
    padding-top: 0;
    top: 0;
  `
  const RightSideBlock = styled(Paper)`
    background-color: #F5F8FA;
    border-radius: 15px;
    margin-top: 20px;
    & .MuiList-root {
      padding-top: 0;
    }
  `
  const RightSideBlockHeader = styled(Paper)`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    padding: 13px 18px;
    & b {
      font-size: 20px;
      font-weight: 700;
      font-family: Roboto, sans-serif;
    }
  ` 
  const RightSideBlockItem = styled(ListItem)`
    cursor: pointer;
    
    & .MuiTypography-body1 {
      font-weight: 700;
    }
    & .MuiListItemAvatar-root {
      min-width: 50px;
    }
    & .MuiListItemText-root {
      margin: 0;
    }
    &:hover {
      background-color: '#edf3f6'
    }
  `

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
      <Grid sm={1} md={3} item>
        <SideMenu />
      </Grid>
      <Grid sm={8} md={6} item>
        <TweetWrapper variant='outlined'>
          <TweetHeader variant='outlined'>
            <Typography variant='h6'>Головна</Typography>
          </TweetHeader>
          <AddForm>
            <AddTweetForm />
          </AddForm>
          <AddFormBottomLine />

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
      <Grid sm={3} md={3} item>
        <RightSide>
          <SearchTextField/>
          <RightSideBlock>
            <RightSideBlockHeader variant="outlined">
              <b>Тренди для вас</b>
            </RightSideBlockHeader>
            <List>
              <RightSideBlockItem>
                <ListItemText
                  primary="Львів"
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: 3 331
                    </Typography>
                  }
                />
              </RightSideBlockItem>
              <Divider component="li" />
              <RightSideBlockItem>
                <ListItemText
                  primary="#ЗСУ"
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: 163 122
                    </Typography>
                  }
                />
              </RightSideBlockItem>
              <Divider component="li" />
              <RightSideBlockItem>
                <ListItemText
                  primary="Євросоюз"
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: 13 554
                    </Typography>
                  }
                />
              </RightSideBlockItem>
              <Divider component="li" />
            </List>
          </RightSideBlock>
          <RightSideBlock>
              <RightSideBlockHeader variant="outlined">
                <b>Кого читати</b>
              </RightSideBlockHeader>
              <List>
                <RightSideBlockItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </RightSideBlockItem>
                <Divider component="li" />
              </List>
            </RightSideBlock>
        </RightSide>
      </Grid>
      </Grid>
    </Container>
  )
}