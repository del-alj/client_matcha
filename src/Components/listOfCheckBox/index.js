import React, { useContext } from 'react';

import { Flex } from '../styles/Container.styles';
import { CheckBox, Input } from './style';
import { validation } from '../../assets/validationSchema/editProfile';
import { UserContext } from '../../Components/contexts/usercontext';

export const ListCheckBox = (props) => {
  const { element, onChange } = props;
  const [userdetails, setUserDetails] = useContext(UserContext);

  const handelChange = (e) => {
    onChange(e);
    const newData = { ...userdetails };
    newData['preference'] = e.target.checked ? e.target.value : '';
    setUserDetails(newData);
  };

  return (
    <Flex direction="column">
      <h5
        style={{ textAlign: 'initial', fontSize: '16px', fontWeight: 'normal' }}
      >
        Preferences
      </h5>
      <Flex direction="row !important">
        {element.map((elem, index) => (
          <CheckBox key={index} value={index[index]}>
            <Input
              type="checkbox"
              id={`preference`}
              name={elem}
              defaultValue={elem}
              {...validation[elem[index]]}
              onChange={handelChange}
              checked={elem === userdetails?.preference ? true : false}
            />
            <div>
              <label htmlFor={`checkbox${elem}`}>{elem}</label>
            </div>
          </CheckBox>
        ))}
      </Flex>
    </Flex>
  );
};
