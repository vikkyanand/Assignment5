import React from 'react';
import AddUserForm from './AddUserForm';
import UserList from './UserList';

const App: React.FC = () => {
  return (
    <div>
      <AddUserForm />
      <hr />
      <UserList />
    </div>
  );
};

export default App;