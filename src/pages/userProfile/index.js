import React from 'react';

import { Layout } from '../../layouts/signinLayout';
import useLocalStorage from '../../hooks/useLocaleStorage';

export const UserProfile = () => {
  const [name, setName] = useLocalStorage('name', () => '');
  return (
    <Layout>
      <h2>User profile</h2>
      <br/>
      <br/>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Layout>
  );
};
