const express = require('express');
const User = require('../models/user');

// CRUD controllers

// get all users
exports.getUsers = (req, res, next) => {
  User.findAll()
  .then(users => {
    res.status(200).json({ users: users })
  })
  .catch(err => console.log(err))
}

// get a user
exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'user not found' })
        }
        return res.status(200).json({ user: user })
      })
      .catch(err => console.log(err))
}

// create a user
exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email
  }).then(result => {
      console.log('create user');
      res.status(201).json( {
        message: 'User created successfully!',
        user: result
       })
       .catch(err => {
        console.log(err)
      })
  })
}

// update a user
exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const updateName = req.body.name;
  const updateEmail = req.body.email;
  User.findByPk(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({message: 'User not found!'})
        }
        user.name = userName;
        user.email = userEmail;
        return user.save();
      })
      .then(result => {
        res.status(200).json({message: 'user updated!', user: result})
      })
      .catch(err => console.log(err));
}

// delete a user
exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({message: 'User not found!'})
        }
        return user.destroy({
          where: {
            id: userId
          }
        })
      .then(result => {
        res.status(200).json({message: 'User destroyed!'})
      })
      .catch(err => console.log(err))
      })
}
