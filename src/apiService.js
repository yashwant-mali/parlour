// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

// Get all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single user by ID
export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add a new user
export const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

// Update a user by ID
export const updateUser = async (id, updatedUser) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedUser);
  return response.data;
};

// Delete a user by ID
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
