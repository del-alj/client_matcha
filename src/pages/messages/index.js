import React, { useContext, useEffect, useState } from 'react';

import { Layout } from '../../layouts/signinLayout';
import { Content, Box } from '../dashboard/style';
import {
  ListMessages,
  Board,
  Heart,
  Circle,
  Div,
  Message,
  MessageDiv,
} from './style';

import { UserContext } from '../../Components/contexts/usercontext';
import { authentication } from '../../Components/contexts/usecontext';
import { getUser } from '../editProfile/tools';

import heart from '../../assets/icons/heart.png';
import { StikyUser } from './tools/stikyUser';
export const Messages = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { auth } = useContext(authentication);
  const url = `/user/${auth.userId}`;

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);

  return (
    <Layout login={true}>
      <Content>
        <Box style={{ flexDirection: 'row', border: '1px solid black' }}>
          <ListMessages>
            <p>test</p>
          </ListMessages>
          <Board>
            <StikyUser userName={'dina'} />
            <Div>
              <Heart src={heart} />
              <Circle />
              <Circle />
              <Circle />
            </Div>
            <div></div>
            <MessageDiv>
              {/* stiky message */}
              <Message placeholder="message ..."></Message>
            </MessageDiv>
          </Board>
        </Box>
      </Content>
    </Layout>
  );
};
