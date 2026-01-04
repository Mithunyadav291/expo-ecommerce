import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.listen(3001, () => {
  console.log("server is up and running at port 3001");
});
