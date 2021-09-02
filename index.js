var db=require('./config/database');
var dbService=require('./services/dbservice');

function dumping(){
  //dbService.dumpBankInfoIntoDb();
  //dbService.dumpBankNameIntoDb();
  dbService.dumpIfscIntoDb();

}


db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})


db.sync().then(function() {
    dumping();

   
  }).catch(function(err) {
  
    console.log(err);
  });

//dbService.dumpIfcsIntoDb();
