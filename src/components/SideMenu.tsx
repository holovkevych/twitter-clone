import React from 'react'
import styled from '@emotion/styled'
import { Button, IconButton, Typography, Hidden } from '@mui/material'
import { theme } from '../theme'

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PermIdentity';
import OthersIcon from '@mui/icons-material/MoreHoriz';
import CreateIcon from '@mui/icons-material/Create';

const SideMenuList = styled.ul`
  position: sticky;
  top: 0;
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
  font-weight: 400;
  font-size: 20px;
  margin-left: 10px;
`

export const SideMenu: React.FC = (): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }


  return (
    <SideMenuList>
      <SideMenuListItem>
        <div>
          <IconButton aria-label="" color="primary">
            <TwitterIcon sx={{ fontSize: '28px', margin: '10px 0' }} />
          </IconButton>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
            <HomeIcon sx={{ fontSize: '28px', margin: '10px 0' }} />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Головна</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <SearchIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Ознайомлення</SideMenuListItemLabel>
          </Hidden>
        </div>        
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <NotificationsIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Сповіщення</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <MessageIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Повідомлення</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <BookmarkIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Закладки</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <ListIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Списки</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <UserIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Профіль</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <OthersIcon sx={{ fontSize: '28px' }}  />
          <Hidden smDown>
            <SideMenuListItemLabel variant='h6'>Інші дії</SideMenuListItemLabel>
          </Hidden>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <SideMenuTweetButton variant='contained' color='primary' fullWidth>
          <Hidden smDown>
            Твітнути
          </Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </SideMenuTweetButton>
      </SideMenuListItem>
    </SideMenuList>
  )
}