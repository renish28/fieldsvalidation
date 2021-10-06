const namevalidation = (name, minlength) => {
  var namecount = name.length;
  if (/^[A-Za-z\s]+$/.test(name)) {
    if (namecount > minlength) {
      return 1;
    } else {
      return 0;
    }
  }
}

const dobvalidation = (da) => {
  let enteredMS = new Date(da).getTime();
  let currentMS = new Date().getTime();
  let pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  if ((pattern.test(da)) && (enteredMS <= currentMS)) {
    return 1;
  } else {
    return 0;
  }
}

const getAge = (birth) => {
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
  return age;
}

const isValidDate = (dateStr) => {
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

  if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
    msg = "Month " + month + " doesn't have 31 days!";
    return msg;
  }

  if (month == 2) { // check for february 29th
    let isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    if (day > 29 || (day == 29 && !isleap)) {
      msg = "February " + year + " doesn't have " + day + " days!";
      return msg;
    }
  }

  if (day.charAt(0) == '0') day = day.charAt(1);

  //Incase you need the value in CCYYMMDD format in your server program
  //msg = (parseInt(year,10) * 10000) + (parseInt(month,10) * 100) + parseInt(day,10);

  return msg;  // date is valid
}
const agevalidation = (dob, age) => {
  console.log(dob, age);
  let lre = /^\s*/;
  let datemsg = "";
  let testage = age;
  let inputDate = dob;
  inputDate = inputDate.replace(lre, "");
  datemsg = isValidDate(inputDate);
  if (datemsg != "") {
    return;
  }
  else {
    //Now find the Age based on the Birth Date
    let val = getAge(new Date(inputDate), testage);
    if (val == testage) {
      return 1;
    } else {
      return 0;
    }
  }
}

const phonevalidation = (phone) => {
  if (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)) {
    return 1;
  } else {
    return 0;
  }
}
const ssnvalidation = (ssn) => {
  let ssncount = ssn.length;
  let patt = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
  //let patt=/^[0-9]{3}\-[0-9]{2}\-[0-9]{4}$/;
  let tes = patt.test(ssn);
  if (tes) {
    if (ssncount == 11) {
      let con1 = ssn.substring(0, 3);
      let con2 = ssn.substring(0, 1);
      let con3 = ssn.substring(4, 6);
      let con4 = ssn.substring(7, 11);
      if ((con1 == '000') || (con1 == '666') || (con2 == '9') || (con3 == '00') || (con4 == '0000')) {
        return 0;
      } else {
        return 1;
      }
    } else if (ssncount == 9) {
      var cn1 = ssn.substring(0, 3);
      var cn2 = ssn.substring(0, 1);
      var cn3 = ssn.substring(3, 5);
      var cn4 = ssn.substring(5, 9);
      if ((cn1 == '000') || (cn1 == '666') || (cn2 == '9') || (cn3 == '00') || (cn4 == '0000')) {
        return 0;

      } else {
        return 1;
      }
    }
  } else {
    return 0;
  }

}


const incomevalidation = (inc, count) => {
  let str = "" + inc;
  let index = str.indexOf('.');
  if (index >= 0) {
    let resultcheck = str.length - index - 1;
    console.log(resultcheck);
    if (resultcheck == count) {
      return 1;
    } else {
      return 0;
    }
  }
}
const mailvalidation = (mail,mailexe) => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(mail)) {
    if(mailexe && mailexe.length !=0){
      if(mail.endsWith(mailexe)){
        return 1;
      }else{
        return 0;
      }
    }else{
      return 1;
    }
  } else {
    return 0;
  }
}

const workmailvalidation = (mail) => {
  if (/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!mail\.com)([\w-]+.)+[\w-]{2,4})?$/.test(mail)) {
    return 1;
  } else {
    return 0;
  }
}

const validationfunction = {

  name: namevalidation,
  dob: dobvalidation,
  age: agevalidation,
  email: mailvalidation,
  workmail: workmailvalidation,
  phone: phonevalidation,
  ssn: ssnvalidation,
  income: incomevalidation
}
module.exports = validationfunction;
