import React from 'react'
import { Container } from '@mui/system';
import styled from '@emotion/styled'
import { Grid, Paper, TextField, IconButton, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PermIdentity';
import OthersIcon from '@mui/icons-material/MoreHoriz';

import { Tweet } from '../components/Tweet';

export const Home  = () => {
  
  const SideMenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `
  const SideMenuListItem = styled.li`
    display: flex;
    align-items: center;
  `
  const SideMenuListItemLabel = styled(Typography)`
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
  `
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
        <SideMenuList>
          <SideMenuListItem>
            <IconButton aria-label='delete' color='primary'>
              <TwitterIcon sx={{ fontSize: '36px', margin: '10px 0' }} />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Головна</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <SearchIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Пошук</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <NotificationsIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Сповіщення</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <MessageIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Повідомлення</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <BookmarkIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Закладки</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <ListIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Списки</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <UserIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Профіль</SideMenuListItemLabel>
          </SideMenuListItem>
          <SideMenuListItem>
            <IconButton aria-label='delete'>
              <OthersIcon sx={{ fontSize: '28px' }}  />
            </IconButton>
            <SideMenuListItemLabel variant='h6'>Інше</SideMenuListItemLabel>
          </SideMenuListItem>
        </SideMenuList>
      </Grid>
      <Grid item xs={6}>
        <TweetWrapper variant='outlined'>
          <TweetHeader>
            <Typography variant='h6'>Головна</Typography>
          </TweetHeader>
          <Tweet
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti dolor ipsa sint voluptates illo ullam distinctio porro sed dignissimos? Eveniet, qui? Nobis omnis, dolorem blanditiis dolorum vitae dolor in!"
            user={{
              fullname: "Jony Boy", 
              username: "@jonyboy",
              avatarUrl: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            }}/>

          <Tweet
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti dolor ipsa sint voluptates illo ullam distinctio porro sed dignissimos? Eveniet, qui? Nobis omnis, dolorem blanditiis dolorum vitae dolor in!"
            user={{
              fullname: "Jony Boy", 
              username: "@jonyboy",
              avatarUrl: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            }}/>

          <Tweet
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti dolor ipsa sint voluptates illo ullam distinctio porro sed dignissimos? Eveniet, qui? Nobis omnis, dolorem blanditiis dolorum vitae dolor in!"
            user={{
              fullname: "Jony Boy", 
              username: "@jonyboy",
              avatarUrl: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            }}/>
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