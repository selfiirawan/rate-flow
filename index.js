import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

// API Configuration
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}${API_KEY}/codes`);
        const currencies = response.data.supported_codes;
        // returns [["USD", "United States Dollar"], ["EUR", "Euro"], ...]

        res.render("index.ejs", {currencies});
    } catch (error) {
        console.error(error);
        res.render("index.ejs", {currencies: [], error: "Failed to load currency codes. Please try again."});
    }
});

app.post("/convert", async (req, res) => {
    const {fromCurrency, toCurrency, amount} = req.body;

    try {
        const [convertResponse, codeResponse] = await Promise.all([
            axios.get(`${API_URL}${API_KEY}/pair/${fromCurrency}/${toCurrency}`),
            axios.get(`${API_URL}${API_KEY}/codes`)
        ]);

        const rate = convertResponse.data.conversion_rate;
        const convertedAmount = (amount * rate).toFixed(2);
        const currencies = codeResponse.data.supported_codes;


        res.render("index.ejs", {
            convertedAmount,
            fromCurrency,
            toCurrency, 
            amount,
            currencies,
            error: null,
        });
    } catch (error) {
        console.error(error);
        res.render("index.ejs", {currencies: [], error: "Something went wrong. Please try again."});
    }
})

app.listen(port, () => {
    console.log(`\nServer is running on port ${port}`);
});