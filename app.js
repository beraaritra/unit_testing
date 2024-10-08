import express from "express";

import colors from "colors";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
    return res.json({ message: 'Hello from Express.js!' });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`.bgBlue);
});

export default app;