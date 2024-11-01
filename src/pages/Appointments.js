// src/Appointments.js
import React, { useState, useEffect } from 'react';
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} from '../apiService';

function Appointments() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = async () => {
    if (!name || !email) return;
    const newUser = await addUser({ name, email });
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  };

  const handleUpdateUser = async (userId) => {
    if (!name || !email) return;
    await updateUser(userId, { name, email });
    fetchUsers();
    setEditingUser(null);
    setName('');
    setEmail('');
  };

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Users</h1>
      <ul className="list-group mb-4">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
             name:  {user.name} email: ({user.email}) Date:{user.date} Time: Service: 
            </span>
            <div>
              <button
                className="btn btn-primary btn-sm mr-2"
                onClick={() => handleEditClick(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-center mb-3">{editingUser ? 'Edit User' : 'Add User'}</h2>
      <div className="card p-4">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className={`btn ${editingUser ? 'btn-success' : 'btn-primary'} btn-block`}
          onClick={() => (editingUser ? handleUpdateUser(editingUser) : handleAddUser())}
        >
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </div>
    </div>
  );
}

export default Appointments;
