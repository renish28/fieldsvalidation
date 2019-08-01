 const namevalidation=(name)=>{
            if(/^[A-Za-z\s]+$/.test(name)){
                        return 1;
                       }else{
                      return 0;
            }
    }
  
 const dobvalidation=(da)=>{
            let enteredMS = new Date(da).getTime();
            let currentMS = new Date().getTime();
            let pattern =/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
                  if((pattern.test(da))&&(enteredMS <= currentMS)){
                      return 1;
                         }else{
                             return 0;
                             }
             }
      
const getAge=(birth)=> {
          let today = new Date();
          let nowyear = today.getFullYear();
          let nowmonth = today.getMonth();
          let nowday = today.getDate();
          let birthyear = birth.getFullYear();
          let birthmonth = birth.getMonth();
          let birthday = birth.getDate();
          let age = nowyear - birthyear;
          let age_month = nowmonth - birthmonth;
          let age_day = nowday - birthday;
            console.log(age);
            return age;
      }
       
   const isValidDate=(dateStr)=> {
          let msg = "";
          let datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
          let matchArray = dateStr.match(datePat); 
          if (matchArray == null) {
              msg = "Date is not in a valid format.";
              return msg;
          }
       let month = matchArray[1]; // parse date into variables
       let day = matchArray[3];
        let year = matchArray[4];
         if (month < 1 || month > 12) { // check month range
              msg = "Month must be between 1 and 12.";
              return msg;
          }
       
          if (day < 1 || day > 31) {
              msg = "Day must be between 1 and 31.";
              return msg;
          }
       
          if ((month==4 || month==6 || month==9 || month==11) && day==31) {
              msg = "Month "+month+" doesn't have 31 days!";
              return msg;
          }
       
          if (month == 2) { // check for february 29th
          let isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
          if (day>29 || (day==29 && !isleap)) {
              msg = "February " + year + " doesn't have " + day + " days!";
              return msg;
          }
          }
       
          if (day.charAt(0) == '0') day= day.charAt(1);
          
          //Incase you need the value in CCYYMMDD format in your server program
          //msg = (parseInt(year,10) * 10000) + (parseInt(month,10) * 100) + parseInt(day,10);
          
          return msg;  // date is valid
      }
 const agevalidation=(dob,age)=>{
        console.log(dob,age);
      let lre = /^\s*/;
       let datemsg = "";
          let testage=age;
          let inputDate = dob;
        inputDate = inputDate.replace(lre, "");
          datemsg = isValidDate(inputDate);
              if (datemsg != "") {
                 // alert(datemsg);
                  return;
              }
              else {
                  //Now find the Age based on the Birth Date
                let val= getAge(new Date(inputDate),testage);
                if(val==testage){
                  return 1;
                }else{
                  return 0;
                }
              }
      }

const phonevalidation=(phone)=>{
       if(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)) {
           return 1;
       }else{
           return 0;
       }
}
const ssnvalidation=(ssn)=>{
        let patt=/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
        let tes=patt.test(ssn);
        if(tes){
          return 1;
        }else{
          return 0;
        }

      }
     
const incomevalidation=(inc,count)=>{
          let str = "" + inc;
         let index = str.indexOf('.');
         if (index >= 0) {
           let resultcheck= str.length - index - 1;
           console.log(resultcheck);
           if(resultcheck==count){
             return 1;
           }else{
             return 0;
           }
      }
      }
      const mailvalidation=(mail)=>{ 
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(mail)){
            return 1;
        }else{
            return 0;
        }
      
        
      }

   const validationfunction={
          
         name:namevalidation,
         dob:dobvalidation,
          age:agevalidation,
          email:mailvalidation,
          phone:phonevalidation,
         ssn:ssnvalidation,
         income:incomevalidation
        }
module.exports = validationfunction;
