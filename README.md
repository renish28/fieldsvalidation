# Validation Function

Validation function - A simple and effective input field validation which can validate Name, DOB, Age, Email, SSN, Phone number and Income.

# Installation

 `npm i validationfunction`

# Usage

Simply add `import validationfunction from 'validationfunction';`

#### Name field validation

```javascript
let Name = "James";
let Minlength= 4;
let isValidName = validationfunction.name(Name,Minlength);
/* validationfunction.name(Name,Minlength) will check for special characters and numbers and also will check the length of the name should be greater than the minlength parameter and returns 1 if the name is valid else returns 0 */
```
#### Date of Birth validation

```javascript
let DOB = "10/10/2010";//"mm-dd-yyyy or mm/dd/yyyy"
let isValidDOB = validationfunction.dob(DOB);
/* validationfunction.dob(DOB) will check for future date and returns 1 if the DOB is a past date else returns 0 */
```
#### Age validation

```javascript
let DOB = "10/10/2010";//"mm-dd-yyyy or mm/dd/yyyy"
let Age = 8;
let isValidAge = validationfunction.age(DOB,Age);
/* validationfunction.age(DOB,Age) will check the DOB with Age and returns 1 if the age is valid else returns 0 */
```
#### Email validation

```javascript
let Email = "mail@testmail.com";
let isValidEmail = validationfunction.email(Email);
/* validationfunction.email(Email) will check for a valid Email and returns 1 if the Email ID is valid else returns 0 */
```
#### Work Email validation

```javascript
let Email = "mail@testmail.com";
let isValidEmail = validationfunction.workmail(Email);
/*
 validationfunction.workmail(Email) will check for a valid Email(other than free mails(gmail,yahoo,..etc)) and returns 1 if the Email ID is valid else returns 0 */
```
#### Phone validation

```javascript
let Phone = "9876543210";
let isValidPhone = validationfunction.phone(Phone);
/* validationfunction.phone(Phone) will check for a valid Phone number and returns 1 if the Phone number is valid else returns 0 */
```
#### SSN validation

```javascript
let SSN = "876543210";//"876-54-3210 or 876543210"
let isValidSSN = validationfunction.ssn(SSN);
//Invalid SSN format
/*
Any number beginning with "000", "666", "900-999"
Any number has a middle "00", or ends in "0000" will never be a valid SSN.
*/
/* validationfunction.ssn(SSN) will check for a valid SSN and returns 1 if the SSN is valid else returns 0 */
```
#### Income validation

```javascript
let Income = "10000.00";
let noOfDecimals = "2";
let isValidIncome = validationfunction.income(Income, noOfDecimals);
/* validationfunction.income(Income, noOfDecimals) will check for the provided income with the number of allowed decimals and returns 1 if the Income(with specified decimals) is valid else returns 0 */
```