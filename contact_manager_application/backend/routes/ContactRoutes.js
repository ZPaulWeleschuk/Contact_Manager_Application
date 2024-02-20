const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

// GET /contacts
router.get('/contacts', ContactController.getAllContacts);

// GET /contacts/:id
router.get('/contacts/:id', ContactController.getContactById);

// POST /contacts
router.post('/contacts', (req, res) => {
    const contact = JSON.parse(req.body);
    ContactController.createContact(contact);
});

// PUT /contacts/:id
router.put('/contacts/:id', (req, res) => {
    const contact = JSON.parse(req.body);
    ContactController.updateContact(req.params.id, contact);
});

// DELETE /contacts/:id
router.delete('/contacts/:id', (req, res) => {
    ContactController.deleteContact(req.params.id);
});

module.exports = router;
