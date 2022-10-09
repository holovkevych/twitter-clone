import React from 'react'
import { Grid, Paper } from '@mui/material'
import { jsx, css } from '@emotion/react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PermIdentity';
import OthersIcon from '@mui/icons-material/MoreHoriz';
import styled from '@emotion/styled'

import { IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system';

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
        <Paper>xs</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>xs</Paper>
      </Grid>
      </Grid>
    </Container>
  )
}