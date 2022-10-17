import React from 'react'
import styled from '@emotion/styled'
import { Avatar, Grid, Paper, IconButton, Typography } from '@mui/material'

import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import RetweetIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/IosShare';

interface TweetProps {
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  }
}

const TweetBlock = styled(Paper)`
  cursor: pointer;
  /* padding-top: 10px; */
  /* padding-left: 10px; */
  padding: 10px 15px;
  /*  margin-bottom : 10px; */

  &:hover {
    background-color: rgb(245,248,250)
  }
`
const TweetSpan = styled.span`  
  margin-left: 5px;
  color: lightgray;
`
const TweetFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`

export const Tweet: React.FC<TweetProps> = ({text, user}: TweetProps): React.ReactElement => {
  return (
    <TweetBlock variant='outlined'>
      <Grid container spacing={2}>
        <Grid item xs={1}>
        <Avatar 
          alt={user.fullname} 
          src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography><b>{user.fullname}</b> 
            <TweetSpan>{user.username}</TweetSpan>
            <TweetSpan>·</TweetSpan>
            <TweetSpan>2 год</TweetSpan>
          </Typography>
          <Typography variant='body1' gutterBottom>
            {text}
          </Typography>
          <TweetFooter>
            <div>
              <IconButton>
                <CommentIcon color='primary' sx={{fontSize: 20}}></CommentIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RetweetIcon color='primary' sx={{fontSize: 20}}></RetweetIcon>
              </IconButton>
              {/* <span>1</span> */}
            </div>
            <div>
              <IconButton>
                <LikeIcon color='primary' sx={{fontSize: 20}}></LikeIcon>
              </IconButton>
              {/* <span>1</span> */}
            </div>
            <div>
              <IconButton>
                <ShareIcon color='primary' sx={{fontSize: 20}}></ShareIcon>
              </IconButton>
              {/* <span>1</span> */}
            </div>
          </TweetFooter>
        </Grid>
      </Grid>
    </TweetBlock>
  )
}