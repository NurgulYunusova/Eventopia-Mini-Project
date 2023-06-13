const express = require('express');
const TicketRoutes = express.Router();
const ticketController = require('../controllers/TicketController');


TicketRoutes.get('/', ticketController.getAllTickets);
TicketRoutes.get('/:id', ticketController.getTicket);
TicketRoutes.post('/', ticketController.createTicket);
TicketRoutes.patch('/:id', ticketController.updateTicket);
TicketRoutes.delete('/', ticketController.deleteTicket);

module.exports = {TicketRoutes};