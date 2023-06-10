const express = require('express');
const { db } = require('./config/db');
const fileUpload = require("express-fileupload");
const path = require('path');
const cors = require("cors");
const { EventRoutes } = require('./routes/EventRoutes');
const { CategoryRoutes } = require('./routes/CategoryRoutes');
const { LocationRoutes } = require('./routes/LocationRoutes');



require('dotenv').config();

db.connect();

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.use('/api/events', EventRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/location', LocationRoutes);



app.listen(3001);