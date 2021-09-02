var bankNameDao=require('../Dao/bankname-dao');
var bank_name=require('../data/banknames.json');

var ifscDao=require('../Dao/ifsc-dao');
var ifsc_list=require('../data/IFSC-list.json');


var bankInfoDao=require('../Dao/bankInfo-dao');
var bank_info=require('../data/banks.json');

var util=require('../util/util');




class DbService{
       
    async dumpBankNameIntoDb(){
        try {
            console.log('BANK_NAME: process starting');
            for(let row in bank_name){
            var rowvalue = bank_name[row];
               

            var bank={
              bankCode:row,
              bankName:rowvalue,
            }
            await bankNameDao.insert(bank);
        } 
        
            console.log("BANK_NAME: process completed");

        }
        catch (error) {
            console.log('Error found',error);
        
        }
    }


    async dumpBankInfoIntoDb(){
    
         try {
            console.log('BANK_INFO:process starting');
        for(let row in bank_info){
         
         
        var rowvalue = bank_info[row];
       
       var bank={
          bankCode:rowvalue.code,
          type: rowvalue.type,
          ifsc: rowvalue.ifsc,
          micr: rowvalue.micr,
          iin:  rowvalue.iin,
          apbs:  rowvalue.apbs,
          achCredit:  rowvalue.ach_credit,
          achDebit:  rowvalue.ach_debit,
          nachDebit:  rowvalue.nach_debit,
          upi: rowvalue.upi
        }
        await bankInfoDao.insert(bank);
    } 
        console.log("BANK_INFO: process completed");
    }
    
        catch (error){
        console.log('Error found',error);
    }
    } 

    async dumpIfscIntoDb(){
        try {

            console.log('IFSC_LIST:process starting');
            let arr=[];

           for(let ifsc of ifsc_list ){
                
            const ifscDetails = await util.getRazorPayIfscDetails(ifsc);
        if (ifscDetails) {

           // console.log(ifsc,"ifsc");
        
        //     let ifscCodeExist = await ifscDao.find({
        //         query: { ifscCode: ifsc },
        //       });

         let bank_data   = util.get_bank_details(ifscDetails);
         await ifscDao.insert(bank_data);
         //arr.push(bank_data);
        // if (ifscCodeExist.length > 0) {
        //     await ifscDao.update(
        //         {
        //           ifscCode: ifsc,
        //         },
        //         bank_data
        //       );
        // }  
        
        //     else {
        //     
        // }



        } else {
         console.log("IFSC_LIST: ifsc not matched",ifsc);
        }

            
        }
        //await ifscDao.bulkInsert(arr);
        console.log('IFSC_LIST: process completed');

        } 

        catch (error) {
            console.log(error);

            
        }


    }
    
   










}

module.exports= new DbService();
