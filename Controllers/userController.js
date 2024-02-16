const { userRepository } = require("../Repositories/userRepository");
exports.userController = {
  getUser: async (req, res) => {
    try {
      const users = await userRepository.getUser();
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
      const user = await userRepository.createUser(req.body);
      res.status(201).json(user);
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
