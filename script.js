// Function # 01 - Check whether a character is uppercase or lowercase alphabet
function checkUpperLower() {
    var string = document.getElementById('caseCheckAlphabet').value;
    var status = '';
    var newSegment = '<strong>Please Enter a single Alphabet!</strong>';
    if (string=="" || !string.match(/[a-zA-Z]/g)) {
        document.getElementById('alert01').innerHTML = newSegment;
        document.getElementById('alert01').className = 'alert alert-danger text-center';
    }
    else {
        if (string.match(/[A-Z]/g)) {
            status = 'Uppercase';
        } else {
            status = 'Lowercase'
        }

        newSegment = 'Entered Character <strong>"' + string + '"</strong> is <strong>"' + status + '"</strong>';
        document.getElementById('alert01').innerHTML = newSegment;
        document.getElementById('alert01').className = 'alert alert-success text-center';
    }
}


// Function # 02 - Convert week number to week day
function checkWeekDay() {
    var string = document.getElementById('weekNumber').value;
    var day = '';
    var newSegment = '<strong>Please Enter a Number between 0 and 6!</strong>';
    if (string=="" || !string.match(/[0-6]/g)) {
        document.getElementById('alert02').innerHTML = newSegment;
        document.getElementById('alert02').className = 'alert alert-danger text-center';
    }
    else {
        switch (parseInt(string)) {
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday'
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
        }

        newSegment = 'Week Number: <strong>"' + string + '"</strong><br> Week Day: <strong>"' + day + '"</strong>';
        document.getElementById('alert02').innerHTML = newSegment;
        document.getElementById('alert02').className = 'alert alert-success text-center';
    }
}


// Function # 03 - Month number to number of days in that month
function monthToDays() {
    var string = document.getElementById('monthNumber').value;
    var month = '';
    var days = 0;
    var newSegment = '<strong>Please Enter a Month Number between 1 and 12!</strong>';
    if (string=="" || !string.match(/[0-9]/g)) {
        document.getElementById('alert03').innerHTML = newSegment;
        document.getElementById('alert03').className = 'alert alert-danger text-center';
    }
    else {
        switch (parseInt(string)) {
            case 1:
                month = 'January';
                days = 31;
                break;
            case 2:
                month = 'February'
                days = 28;
                break;
            case 3:
                month = 'March';
                days = 31;
                break;
            case 4:
                month = 'April';
                days = 30;
                break;
            case 5:
                month = 'May';
                days = 31;
                break;
            case 6:
                month = 'June';
                days = 30;
                break;
            case 7:
                month = 'July';
                days = 31;
                break;
            case 8:
                month = 'August';
                days = 31;
                break;
            case 9:
                month = 'September';
                days = 30;
                break;
            case 10:
                month = 'October';
                days = 31;
                break;
            case 11:
                month = 'November';
                days = 30;
                break;
            case 12:
                month = 'December';
                days = 31;
                break;
            default:
                document.getElementById('alert03').innerHTML = newSegment;
                document.getElementById('alert03').className = 'alert alert-danger text-center';
        }
        if (parseInt(string) > 0 && parseInt(string) <= 12) {
            newSegment = 'Month Number: <strong>"' + string + '"</strong><br> Month Name: <strong>"' + month + 
            '"</strong><br> Number of Days: <strong>"' + days + '"</strong>';
            document.getElementById('alert03').innerHTML = newSegment;
            document.getElementById('alert03').className = 'alert alert-success text-center';
        }
    }
}


// Function # 04 - Count number of notes in given amount
function amountToNotes() {
    var amount = document.getElementById('givenAmount').value;
    var orignalAmount = document.getElementById('givenAmount').value;
    var fiveThousand = 0;
    var thousand = 0;
    var fiveHundred = 0;
    var hundred = 0;
    var fifty = 0;
    var twenty = 0;
    var ten = 0;
    var five = 0;
    var two = 0;
    var one = 0;
    var notes = 0;
    var coins = 0;
    var newSegment = '<strong>Please Enter a Positive Amount</strong>';
    if (amount=='' || amount=='0' || amount < 0 || !amount.match(/[0-9]/g)) {
        document.getElementById('alert04').innerHTML = newSegment;
        document.getElementById('alert04').className = 'alert alert-danger text-center';
    }
    else {
        amount = Math.round(amount);
        while (amount != 0) {
            if (amount >= 5000) {
                fiveThousand += 1;
                amount -= 5000;
            } else if (amount >= 1000) {
                thousand += 1;
                amount -= 1000;
            } else if (amount >= 500) {
                fiveHundred += 1;
                amount -= 500;
            } else if (amount >= 100) {
                hundred += 1;
                amount -= 100;
            } else if (amount >= 50) {
                fifty += 1;
                amount -= 50;
            } else if (amount >= 20) {
                twenty += 1;
                amount -= 20;
            } else if (amount >= 10) {
                ten += 1;
                amount -= 10;
            } else if (amount >= 5) {
                five += 1;
                amount -= 5;
            } else if (amount >= 2) {
                two += 1;
                amount -= 2;
            } else if (amount >= 1) {
                one += 1;
                amount -= 1;
            }
        }

        notes = fiveThousand + thousand + fiveHundred + hundred + fifty + twenty + ten;
        coins = five + two + one;

        newSegment = 'Entered Amount <strong>"' + orignalAmount + '"</strong><br> Number of Notes: <strong>"' + 
        notes + '"</strong><br> Number of Coins: <strong>"' + coins + '"</strong><br> 5000: <strong>"' + 
        fiveThousand + '"</strong> 1000: <strong>"' + thousand + '"</strong> 500: <strong>"' + fiveHundred + 
        '"</strong> 100: <strong>"' + hundred + '"</strong> 50: <strong>"' + fifty + '"</strong> 20: <strong>"' + 
        twenty + '"</strong> 10: <strong>"' + ten + '"</strong><br> 5: <strong>"' + five + 
        '"</strong> 2: <strong>"' + two + '"</strong> 1: <strong>"' + one + '"</strong>';
        document.getElementById('alert04').innerHTML = newSegment;
        document.getElementById('alert04').className = 'alert alert-success text-center';
    }
}


// Function # 05 - Input angles and check whether a triangle is valid or not
function angleCheck() {
    var angle1 = document.getElementById('angleCheck01').value;
    var angle2 = document.getElementById('angleCheck02').value;
    var angle3 = document.getElementById('angleCheck03').value;
    var status = '';
    var totalAngle = 0;
    var newSegment = '<strong>Please enter all angles in positive integers!</strong>';
    if (angle1 == "" || angle2 =="" || angle3 == "" || angle1.match(/[.e+-]/g) || angle2.match(/[-.e+]/g) || angle3.match(/[-.e+]/g)) {
        document.getElementById('alert05').innerHTML = newSegment;
        document.getElementById('alert05').className = 'alert alert-danger text-center';
    }
    else {
        totalAngle = parseInt(angle1) + parseInt(angle2) + parseInt(angle3);
        if (totalAngle == 180) {
            status = 'of a triangle';
        } else {
            status = 'not of a triangle'
        }

        newSegment = 'Angles: <strong>"' + angle1 + ' + ' + angle2 + ' + ' + angle3 + ' = ' + totalAngle +
         '"</strong><br> These angles are <strong>"' + status + '"</strong>';
        document.getElementById('alert05').innerHTML = newSegment;
        document.getElementById('alert05').className = 'alert alert-success text-center';
    }
}


// Function # 06 - Input sides and check whether a triangle is valid or not
function sideCheck() {
    var side1 = document.getElementById('sideCheck01').value;
    var side2 = document.getElementById('sideCheck02').value;
    var side3 = document.getElementById('sideCheck03').value;
    var statement = '';
    var status = '';
    var newSegment = '<strong>Please enter all sides in positive integers!</strong>';
    if (side1 == "" || side2 =="" || side3 == "" || side1.match(/[e+-]/g) || side2.match(/[e+-]/g) || side3.match(/[e+-]/g)) {
        document.getElementById('alert06').innerHTML = newSegment;
        document.getElementById('alert06').className = 'alert alert-danger text-center';
    }
    else {
        side1 = parseFloat(side1);
        side2 = parseFloat(side2);
        side3 = parseFloat(side3);
        if (side1 == side2 && side2 == side3 && side3 == side1) {
            statement = 'Sides: <strong>"' + side1 + ' = ' + side2 + ' = ' + side3 + '"</strong><br>';
            status = 'of a triangle';
        } else if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            statement = '<strong>"' + side1 + ' + ' + side2 + ' > ' + side3 + '"</strong><br><strong>"' + side2 
            + ' + ' + side3 + ' > ' + side1 + '"</strong><br><strong>"' + side3 + ' + ' + side1 + ' > ' + side2 + 
            '"</strong><br>';
            status = 'of a triangle';
        } else {
            statement = 'Side 1 = <strong>"' + side1 + '"</strong><br> Side 2 = <strong>"' + side2 + 
            '"</strong><br> Side 3 = <strong>"' + side3 + '"</strong><br>'
            status = 'not of a triangle';
        }

        newSegment = statement + 'These sides are <strong>"' + status + '"</strong>';
        document.getElementById('alert06').innerHTML = newSegment;
        document.getElementById('alert06').className = 'alert alert-success text-center';
    }
}


// Function # 07 - Input sides or angles and check whether a triangle is equilateral, isosceles, or scalene
function triangleTypeCheck() {
    var side1 = document.getElementById('sideCheck1').value;
    var side2 = document.getElementById('sideCheck2').value;
    var side3 = document.getElementById('sideCheck3').value;
    var status = '';
    var newSegment = '<strong>Please enter all sides in positive integers!</strong>';
    if (side1 == "" || side2 =="" || side3 == "" || side1.match(/[e+-]/g) || side2.match(/[e+-]/g) || side3.match(/[e+-]/g)) {
        document.getElementById('alert07').innerHTML = newSegment;
        document.getElementById('alert07').className = 'alert alert-danger text-center';
    }
    else {
        side1 = parseFloat(side1);
        side2 = parseFloat(side2);
        side3 = parseFloat(side3);
        if (side1 == side2 && side2 == side3 && side3 == side1) {
            status = 'an Equilateral Triangle';
        } 
        else if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            if (side1 == side2 || side2 == side3 || side3 == side1) {
                status = 'an Isosceles Triangle';
            } 
            else {
                status = 'a Scalene Triangle'
            }
        } 
        else {
            status = 'not a triangle';
        }

        newSegment = 'Side 1 = <strong>"' + side1 + '"</strong><br> Side 2 = <strong>"' + side2 + 
        '"</strong><br> Side 3 = <strong>"' + side3 + '"</strong><br>' + 'This triangle is <strong>"' + 
        status + '"</strong>';
        document.getElementById('alert07').innerHTML = newSegment;
        document.getElementById('alert07').className = 'alert alert-success text-center';
    }
}


// Function # 08 - Find all roots of a quadratic equation
function quadraticRoots() {
    var a = document.getElementById('aValue').value;
    var b = document.getElementById('bValue').value;
    var c = document.getElementById('cValue').value;
    var discriminant = 0;
    var root01 = 0;
    var root02 = 0;
    var status = '';
    var statement = '';
    var newSegment = "<strong>Please enter all values and a can't be zero!</strong>";
    if (a == "" || a == "0" || b =="" || c == "" || a.match(/[e+]/g) || b.match(/[e+]/g) || c.match(/[e+]/g)) {
        document.getElementById('alert08').innerHTML = newSegment;
        document.getElementById('alert08').className = 'alert alert-danger text-center';
    }
    else {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        
        discriminant = (b*b) - (4*a*c);
        if (discriminant == 0) {
            root01 = -b/(2*a);
            if (root01.toString().match(/[.]/g)) {
                root01 = root01.toFixed(2);
            }
            status = 'only one root';
            statement = 'Formula: <strong>ax<sup>2</sup> + bx + c = 0</strong><br> a = <strong>' + a + 
            '</strong>, b = <strong>' + b + '</strong>, c = <strong>' + c + '</strong><br> It has <strong>' +
            status + '</strong><br> <strong>' + root01 + '</strong>';
        } else if (discriminant > 0) {
            discriminant = Math.sqrt(discriminant);
            root01 = -(b+discriminant)/(2*a);
            root02 = -(b-discriminant)/(2*a);
            if (root01.toString().match(/[.]/g)) {
                root01 = root01.toFixed(2);
            }
            if (root02.toString().match(/[.]/g)) {
                root02 = root02.toFixed(2);
            }
            status = 'two real roots';
            statement = 'Formula: <strong>ax<sup>2</sup> + bx + c = 0</strong><br> a = <strong>' + a + 
            '</strong>, b = <strong>' + b + '</strong>, c = <strong>' + c + '</strong><br> It has <strong>' +
            status + '</strong><br> <strong>' + root01 + '</strong><br> <strong>' + root02 + '</strong>';
        } else {
            var divider = 0;
            divider = -(b/(2*a));
            if (divider.toString().match(/[.]/g)) {
                divider = divider.toFixed(2);
            }
            discriminant = Math.sqrt(-1*discriminant);
            discriminant = discriminant/(2*a);
            if (discriminant.toString().match(/[.]/g)) {
                discriminant = discriminant.toFixed(2);
            }
            root01 = divider + ' - ' + discriminant + 'i';
            root02 = divider + ' + ' + discriminant + 'i';
            status = 'two complex roots';
            statement = 'Formula: <strong>ax<sup>2</sup> + bx + c = 0</strong><br> a = <strong>' + a + 
            '</strong>, b = <strong>' + b + '</strong>, c = <strong>' + c + '</strong><br> It has <strong>' +
            status + '</strong><br> <strong>' + root01 + '</strong><br> <strong>' + root02 + '</strong>';
        }

        document.getElementById('alert08').innerHTML = statement;
        document.getElementById('alert08').className = 'alert alert-success text-center';
    }
}


// Function # 09 - Calculate profit or loss
function calculateProfit() {
    var cost = document.getElementById('pCost').value;
    var items = document.getElementById('pItems').value;
    var sold = document.getElementById('sPrice').value;
    var status = '';
    var profit = 0;
    var newSegment = '<strong>Please enter all values!</strong>';
    if (cost == "" || items =="" || sold == "" || cost.match(/[e+-]/g) || items.match(/[e+-.]/g) || sold.match(/[e+-]/g)) {
        document.getElementById('alert09').innerHTML = newSegment;
        document.getElementById('alert09').className = 'alert alert-danger text-center';
    }
    else {
        cost = parseFloat(cost);
        items = parseFloat(items);
        sold = parseFloat(sold);
        cost = cost * items;
        sold = sold * items;
        profit = sold - cost;
        if (profit >= 0) {
            status = 'Profit';
        } 
        else {
            status = 'Loss';
        }

        newSegment = 'Inventory Cost = <strong>"' + cost + '"</strong><br> Total Items = <strong>"' + items + 
        '"</strong><br> Revenue = <strong>"' + sold + '"</strong><br><strong>' + status + ' = ' + profit + 
        '</strong>';
        document.getElementById('alert09').innerHTML = newSegment;
        document.getElementById('alert09').className = 'alert alert-success text-center';
    }
}


// Function # 10 - Search all occurances of a character in given string
function occuranceCheck() {
    var string = document.getElementById('occuString').value;
    var character = document.getElementById('occuCharacter').value;
    var occurance = '';
    var newSegment = '<strong>Please Enter both String and Character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert10').innerHTML = newSegment;
        document.getElementById('alert10').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string[i] == character.toUpperCase() || string[i] == character.toLowerCase()) {
                occurance = occurance + i + ', ';
            }
            
        }
        if (occurance == '') {
            occurance = 'Not Found';
        }
        else {
            occurance = occurance.slice(0, occurance.length-2);
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
        '"</strong><br> Occurance: <strong>"' + occurance + '"</strong>';
        document.getElementById('alert10').innerHTML = newSegment;
        document.getElementById('alert10').className = 'alert alert-success text-center';
    }
}


// Function # 11 - Count occurances of a character in given string
function occuranceCount() {
    var string = document.getElementById('occuCount').value;
    var character = document.getElementById('charCount').value;
    var occurance = 0;
    var newSegment = '<strong>Please Enter both String and Character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert11').innerHTML = newSegment;
        document.getElementById('alert11').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string[i] == character.toUpperCase() || string[i] == character.toLowerCase()) {
                occurance = occurance + 1;
            }
            
        }
        if (occurance == 0) {
            occurance = '<strong>"' + character + '"</strong> has no occurance';
        }
        else {
            occurance = '<strong>"' + character + '"</strong> has occured <strong>' + occurance + '</strong> times';
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
        '"</strong><br>' + occurance;
        document.getElementById('alert11').innerHTML = newSegment;
        document.getElementById('alert11').className = 'alert alert-success text-center';
    }
}


// Function # 12 - Find highest frequency character in string
function highestFrequency() {
    var string = document.getElementById('highFrequency').value;
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var occured = 0;
    var newSegment = '<strong>Please Enter a string!</strong>';
    if (string=='') {
        document.getElementById('alert12').innerHTML = newSegment;
        document.getElementById('alert12').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (characterString.includes(string[i].toLowerCase())) {
                index = characterString.indexOf(string[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(string[i].toLowerCase());
                occurance.push(1);
            }
        }

        for (var x=0; x<occurance.length; x++) {
            if (occurance[x] > occured) {
                occured = occurance[x];
            }
        }

        for (var y=0; y<occurance.length; y++) {
            if (occured == occurance[y]) {
                statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
                occurance[y] + '"</strong>';
            }
        }

        newSegment = 'String: <strong>"' + string + '"</strong><br> Character : Frequency' + statement;
        document.getElementById('alert12').innerHTML = newSegment;
        document.getElementById('alert12').className = 'alert alert-success text-center';
    }
}


// Function # 13 - Find lowest frequency character in string
function lowFrequency() {
    var string = document.getElementById('loFrequency').value;
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var newSegment = '<strong>Please Enter a string!</strong>';
    if (string=='') {
        document.getElementById('alert13').innerHTML = newSegment;
        document.getElementById('alert13').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (characterString.includes(string[i].toLowerCase())) {
                index = characterString.indexOf(string[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(string[i].toLowerCase());
                occurance.push(1);
            }
        }
        var occured = occurance[0];
        for (var x=0; x<occurance.length; x++) {
            if (occurance[x] < occured) {
                occured = occurance[x];
            }
        }

        for (var y=0; y<occurance.length; y++) {
            if (occured == occurance[y]) {
                statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
                occurance[y] + '"</strong>';
            }
        }

        newSegment = 'String: <strong>"' + string + '"</strong><br> Character : Frequency' + statement;
        document.getElementById('alert13').innerHTML = newSegment;
        document.getElementById('alert13').className = 'alert alert-success text-center';
    }
}


// Function # 14 - Find frequency of each character in string
function allFrequency() {
    var string = document.getElementById('eachFrequency').value;
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var newSegment = '<strong>Please Enter a string!</strong>';
    if (string=='') {
        document.getElementById('alert14').innerHTML = newSegment;
        document.getElementById('alert14').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (characterString.includes(string[i].toLowerCase())) {
                index = characterString.indexOf(string[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(string[i].toLowerCase());
                occurance.push(1);
            }
        }

        for (var y=0; y<occurance.length; y++) {
            statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
            occurance[y] + '"</strong>';
        }

        newSegment = 'String: <strong>"' + string + '"</strong><br> Character : Frequency' + statement;
        document.getElementById('alert14').innerHTML = newSegment;
        document.getElementById('alert14').className = 'alert alert-success text-center';
    }
}


// Function # 15 - Remove first occurance of a character from string
function removeCharacter() {
    var string = document.getElementById('remString').value;
    var originalString = document.getElementById('remString').value;
    var character = document.getElementById('remCharacter').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert15').innerHTML = newSegment;
        document.getElementById('alert15').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().indexOf(character.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br><strong> Character Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + string.slice(occurance+1, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert15').innerHTML = newSegment;
        document.getElementById('alert15').className = 'alert alert-success text-center';
    }
}


// Function # 16 - Remove last occurance of a character from string
function removeLastCharacter() {
    var string = document.getElementById('remLastString').value;
    var originalString = document.getElementById('remLastString').value;
    var character = document.getElementById('remLastCharacter').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert16').innerHTML = newSegment;
        document.getElementById('alert16').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().lastIndexOf(character.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br><strong> Character Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + string.slice(occurance+1, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert16').innerHTML = newSegment;
        document.getElementById('alert16').className = 'alert alert-success text-center';
    }
}