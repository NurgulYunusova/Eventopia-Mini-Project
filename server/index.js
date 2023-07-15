const express = require('express');
const { db } = require('./config/db');
const fileUpload = require("express-fileupload");
const path = require('path');
const cors = require("cors");
const winston = require('winston');

const { EventRoutes } = require('./routes/EventRoutes');
const { CategoryRoutes } = require('./routes/CategoryRoutes');
const { LocationRoutes } = require('./routes/LocationRoutes');
const { TicketRoutes } = require('./routes/TicketRoutes');



require('dotenv').config();

db.connect();

const app = express();
app.use(cors(
  {
    origin: ["https://eventopia-ticketing-website.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
));
app.use(fileUpload());
app.use(express.json());

app.use('/api/events', EventRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/location', LocationRoutes);
app.use('/api/tickets', TicketRoutes);



app.listen(3001);
