import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@mui/material';
import React from 'react';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import styled from '@emotion/styled';
import theme from '../theme';

interface AddTweetFormProps {
  maxRows?: number;
}

const MAX_LENGTH = 280;

const AddFormBody = styled.div`
  display: flex;
  width: 100%;
` 
const AddFormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AddFormBottomRight = styled.div`
  display: flex;
  align-items: center;
`
const AddFormTextarea = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  font-size: 20px;
  outline: none;
  font-family: inherit;
  resize: none;
`
const AddFormCircleProgress = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin: 0 10px;

  & .MuiCircularProgress-root {
    position: absolute;
  }
`
const TweetAvatar = styled(Avatar)`
  width: ${theme.spacing(6.5)};
  height: ${theme.spacing(6.5)};
  margin-right: 15px;
`
const TweetFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: -13px;
  max-width: 450px;

  margin-top: 10px;
  padding-left: 70px;
`

export const AddTweetForm: React.FC<AddTweetFormProps> = ({maxRows}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
  };

  return (
    <div>
      <AddFormBody>
        <TweetAvatar
          alt={`Аватарка користувача UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <AddFormTextarea
          onChange={handleChangeTextare}
          placeholder="Що відбувається?"
          value={text}
          //rowsMax={maxRows}
        />
      </AddFormBody>
      <AddFormBottom>
        <TweetFooter>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </TweetFooter>
        <AddFormBottomRight>
          {text && (
            <>
              <span>{textCount}</span>
              <AddFormCircleProgress>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </AddFormCircleProgress>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={text.length >= MAX_LENGTH}
            color="primary"
            variant="contained">
            Твитнуть
          </Button>
        </AddFormBottomRight>
      </AddFormBottom>
    </div>
  );
};
