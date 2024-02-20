const ContactModel = require('../models/ContactModel');

class ContactController {
  // GET /contacts
  static async getAllContacts(req, res) {
    try {
      const contacts = await ContactModel.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // GET /contacts/:id
  static async getContactById(req, res) {
    try {
      const contact = await ContactModel.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // POST /contacts
  static async createContact(req, res) {
    try {
      const contactData = JSON.parse(req.body);
      const contact = await ContactModel.create(contactData);
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // PUT /contacts/:id
  static async updateContact(req, res) {
    try {
      const contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // DELETE /contacts/:id
  static async deleteContact(req, res) {
    try {
      const contact = await ContactModel.findByIdAndDelete(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = ContactController;
