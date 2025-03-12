"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require(".//routes/page.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Middleware
app.use((0, cookie_parser_1.default)(process.env.KEY)); // Use cookies
app.use(express_1.default.json()); // Allow JSON
app.use(express_1.default.urlencoded({ extended: true })); // Allow POST submission
app.set('view engine', 'ejs'); // Set view engine to EJS
app.set('views', path_1.default.join(__dirname, '../src/views')); // EJS templates location
// Routes
app.use('/', page_routes_1.default);
// 404 Fallback
app.use((req, res) => {
    res.status(404).render('404');
});
// Start server
const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
