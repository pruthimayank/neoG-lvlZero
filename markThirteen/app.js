function reversestr(str) {
    return str.split('').reverse().join('')
}

function isPalindrome(str) {
    var reverse = reversestr(str);
    return str === reverse;
}

function convertDateToStr(date) {
    var datestr = {day: '', month: '', year: ''};

    if (date.day < 10) {
        datestr.day = '0' + date.day;
    } else {
        datestr.day = date.day.toString();
    }

    if (date.month < 10) {
        datestr.month = '0' + date.month;
    } else {
        datestr.month = date.month.toString();
    }

    datestr.year = date.year.toString();

    return datestr
}

function getAllDateFormats(date) {
    var datestr = convertDateToStr(date);

    var ddmmyyyy = datestr.day + datestr.month + datestr.year;
    var mmddyyyy = datestr.month + datestr.day + datestr.year;
    var yyyymmdd = datestr.year + datestr.month + datestr.day;
    var ddmmyy = datestr.day + datestr.month + datestr.year.slice(-2);
    var mmddyy = datestr.month + datestr.day + datestr.year.slice(-2);
    var yymmdd = datestr.year.slice(-2) + datestr.month + datestr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true
            break
        }
    }
    return flag
}

function isLeapyear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapyear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

function getNextPalindromeDate(date) {
    var count = 0;
    var nextDate = getNextDate(date);

    while (1) {
        count++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate)
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate)
    }
    return [count, nextDate]
}


var dobInput = document.querySelector("#dob");
var showBtn = document.querySelector("#check-btn");
var result = document.querySelector("#result");

function clickHandler() {
    var bdayStr = dobInput.value;

    if (bdayStr !== '')
        var listOfDate = bdayStr.split('-');

        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }

        var isPalindrome = checkPalindromeForAllDateFormats(date);
        
        if (isPalindrome) {
            console.log("yes")
            result.innerText = ' Yay! Your birthday is a palindrome!!'
        } 
        else {
            var [count, nextDate] = getNextPalindromeDate(date);
            result.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${count} day's! 🙂`;
    }
}

showBtn.addEventListener('click', clickHandler);