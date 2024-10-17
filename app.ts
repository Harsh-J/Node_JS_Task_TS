import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.use("/blocking", (req: Request, res: Response) => {
  //function for performing the task
  
  const blockForSeconds = (timer: number): void => {
    const startTime = Date.now();
    while (Date.now() - startTime < timer * 1000) {
      //just waits till the condition is fullfilled
    }
  };

  blockForSeconds(10); // Block for 10 seconds
  res.json({ Result: `Blocked for 10 seconds!` });
});

app.use("/non-blocking", (req: Request, res: Response) => {
  //just returns Hello
  res.json({ Message: "Hello" });
});
app.listen(port, () => {
  return console.log(`Server is running @:${port}`);
});
