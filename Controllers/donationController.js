const { donationRepository } = require("../Repositories/donationRepository");
exports.donationController = {
  getDonation: async (req, res) => {
    try {
      const donations = await donationRepository.getDonation();
      res.status(200).json(donations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getDonationbyId: async (req, res) => {
    try {
      const donation = await donationRepository.getDonationbyId(req.params.id);
      res.status(200).json(donation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createDonation: async (req, res) => {
    try {
      const donation = await donationRepository.createDonation(req.body);
      res.status(201).json(donation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteDonaotion: async (req, res) => {
    try {
      await donationRepository.deleteDonaotion(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
