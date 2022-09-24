import mysql from '../../connect';
function rowArray(row) {
  var a=[];
  for(var m in row) a.push(row[m]);
  return a;
}
export default async function fetchAll(req, res){
  await mysql.query('select * from data',(err, rows, fields1)=>{
    if(!err){
      const result = Object.values(JSON.parse(JSON.stringify(rows)));
      result.forEach((v) => console.log(v.costDate));

      //console.log(rowArray(rows))
      
      return res.status(200).json(rows)
  }else{
      console.log(err.message)
      
  }
  mysql.end();
})
}
