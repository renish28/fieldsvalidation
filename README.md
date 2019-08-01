# Validation Function

You can use the validationfunction to validate the input fields
 name,dob,age,email,ssn,phone number and income.

# Installation

 `npm i validationfunction`

# Usage

To `import` the code `import validationfunction from 'validationfunction';`

To validate the name fields we can pass the parameter inside the validationfunction like this,
```javascript
let value=validationfunction.name(param);
console.log(value);
/* It will return 0 for the param contains any special character and numbers
 or otherwise it will return 1.
*/
```
To validate the date of birth 
```javascript
let value=validationfunction.dob(param);
console.log(value);
/* It will return 0 for the param contains any future dates 
 or otherwise it will return 1.
*/
```
For the validation of age we can pass the parameter like this
```javascript
let value=validationfunction.age(dob,age);
console.log(value);
/* Based on the dob parameter it will calculate the age and check the calculated age with the age parameter.If it is same means,it will return 1 or else it will return 1.
*/
```
For the validation of email
```javascript
let value=validationfunction.email(param);
console.log(value);
/* 
It will return 1 for valid mail. 
*/
```
Validation of phone number
```javascript
let value=validationfunction.phone(param);
console.log(value);
/* 
It will return 1 for valid phone number.
*/
```
Validation of SSN 
```javascript
let value=validationfunction.ssn(param);
console.log(value);
/* 
It will return 1 for valid ssn (social Security Number)
*/
```
For the validation of income
```javascript
let value=validationfunction.income(income,count);
console.log(value);
/* 
If the count of incomeparameter decimalplaces after a decimal point is equal to the 
countparameter then the function will return 1 else it will return 0. 

*/
```