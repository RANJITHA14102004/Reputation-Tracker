
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

function data(platform){
  return {
    platform,
    issues: ["Slow response","UI glitch","Spam reports"],
    positives: 40,
    negatives: 10,
    neutrals: 5,
    satisfaction: 4.2,
    timeline:[
      {time:"10:00",sentiment:"positive"},
      {time:"10:10",sentiment:"negative"},
      {time:"10:20",sentiment:"positive"}
    ]
  };
}

["twitter","facebook","instagram","reddit"].forEach(p=>{
  app.get("/api/"+p,(req,res)=>res.json(data(p)));
});

app.listen(5000,()=>console.log("Backend running on port 5000"));
