import React from 'react'
import styled from '@emotion/styled'
import { Button, IconButton, Typography } from '@mui/material'
import { theme } from '../theme'

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PermIdentity';
import OthersIcon from '@mui/icons-material/MoreHoriz';

const SideMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 230px;
`
const SideMenuListItem = styled.li`
  cursor: pointer;
  &:hover {
    & div {
      background-color: rgba(29, 161, 242, 0.1);
      
      & h6 {
        color: ${theme.palette.primary.main};
      }
      
      & svg path {
        fill: ${theme.palette.primary.main};
      }
    }
  }

  & div {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 20px 0 25px;
    border-radius: 30px;
    height: 50px;
    margin-bottom: 15px;
    transition: background-color 0.15s ease-in-out;
  }
`
const SideMenuTweetButton = styled(Button)`
  padding: ${theme.spacing(3.2)};
  margin-top: ${theme.spacing(2)};
`
const SideMenuListItemLabel = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
`
export const SideMenu: React.FC = (): React.ReactElement => {
  return (
    <SideMenuList>
      <SideMenuListItem>
        <div>
          <IconButton aria-label='delete' color='primary'>
            <TwitterIcon sx={{ fontSize: '36px', margin: '10px 0' }} />
          </IconButton>
          <SideMenuListItemLabel variant='h6'>Головна</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <SearchIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Пошук</SideMenuListItemLabel>
        </div>        
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <NotificationsIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Сповіщення</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <MessageIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Повідомлення</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <BookmarkIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Закладки</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <ListIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Списки</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <UserIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Профіль</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <OthersIcon sx={{ fontSize: '28px' }}  />
          <SideMenuListItemLabel variant='h6'>Інше</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <SideMenuTweetButton variant='contained' color='primary' fullWidth>Твітнути</SideMenuTweetButton>
      </SideMenuListItem>
    </SideMenuList>
  )
}