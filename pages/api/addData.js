import mysql from '../../connect';


  const addData = async (req, res) => {
    const { salesDate, salesCost, costs, costDate } = req.body;
    var sql = "INSERT INTO data (salesDate, salesCost, costs, costDate) VALUES(?,?,?,?)";
    var values = [
        req.body.salesDate, req.body.salesCost,  req.body.costs, req.body.costDate
    ];
    mysql.query(sql, values, (err, rows, fields) => {
        if (!err){
            console.log('ok')
        }
       
        else{
            console.log(err);

        }
        })
    
  };

  export default addData;