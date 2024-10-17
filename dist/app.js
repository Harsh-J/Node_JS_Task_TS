"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/blocking", (req, res) => {
    //function for performing the task
    const blockForSeconds = (timer) => {
        const startTime = Date.now();
        while (Date.now() - startTime < timer * 1000) {
            //just waits till the condition is fullfilled
        }
    };
    blockForSeconds(10); // Block for 10 seconds
    res.json({ Result: `Blocked for 10 seconds!` });
});
app.use("/non-blocking", (req, res) => {
    //just returns Hello
    res.json({ Message: "Hello" });
});
app.listen(port, () => {
    return console.log(`Server is running @:${port}`);
});
//# sourceMappingURL=app.js.map