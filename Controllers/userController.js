const { userRepository } = require("../Repositories/userRepository");
const filter = require("../functions");
exports.userController = {
  getUser: async (req, res) => {
    try {
      let qs = req.query;
      let users = await userRepository.getUser();
      users = filter(users, qs);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserbyId: async (req, res) => {
    try {
      const user = await userRepository.getUserbyId(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      if (req.body.auth == "org")
        res.status(400).json({ message: "You can't create an org user" });
      else {
        const user = await userRepository.createUser(req.body);
        res.status(201).json(user);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await userRepository.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await userRepository.deleteUser(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
