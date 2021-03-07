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
            occurance = '<strong>"' + character + '"</strong> has occured <strong>"' + occurance + '"</strong> times';
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


// Function # 17 - Remove all occurances of a character from string
function removeAllCharacter() {
    var string = document.getElementById('remAllString').value;
    var originalString = document.getElementById('remAllString').value;
    var character = document.getElementById('remAllCharacter').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert17').innerHTML = newSegment;
        document.getElementById('alert17').className = 'alert alert-danger text-center';
    }
    else {
        while (string.match(character)) {
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
        }

        
        document.getElementById('alert17').innerHTML = newSegment;
        document.getElementById('alert17').className = 'alert alert-success text-center';
    }
}


// Function # 18 - Remove all repeated characters
function removeRepeatedCharacter() {
    var string = document.getElementById('remRepeatedString').value;
    var originalString = document.getElementById('remRepeatedString').value;
    
    var newSegment = '<strong>Please enter a string!</strong>';
    if (string=='') {
        document.getElementById('alert18').innerHTML = newSegment;
        document.getElementById('alert18').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length-1; i++) {
            if (!string[i].match(/[a-zA-Z0-9]/g) && !string[i+1].match(/[a-zA-Z0-9]/g)) {
                while (string[i] == string[i+1]) {
                    string = string.slice(0, i) + string.slice(i+1, string.length);
                }
            }
            else {
                while (string[i].toLowerCase() == string[i+1].toLowerCase()) {
                    string = string.slice(0, i) + string.slice(i+1, string.length);
                } 
            }  
        }

        if (string.length < originalString.length) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> New String: <strong>"' + 
            string + '"</strong>';
        } 
        else {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br><strong>Duplicate Character Not Found!</strong>';
        }
        
        document.getElementById('alert18').innerHTML = newSegment;
        document.getElementById('alert18').className = 'alert alert-success text-center';
    }
}


// Function # 19 - Replace first occurance of a character with another character
function replaceFirstCharacter() {
    var string = document.getElementById('repString').value;
    var originalString = document.getElementById('repString').value;
    var character = document.getElementById('repFirstCharacter').value;
    var character2 = document.getElementById('repSecondCharacter').value;
    var occurance;
    
    var newSegment = '<strong>Please enter the string and both characters!</strong>';
    if (string=='' || character=='' || character2=='') {
        document.getElementById('alert19').innerHTML = newSegment;
        document.getElementById('alert19').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().indexOf(character.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br><strong> Character Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + character2 + string.slice(occurance+1, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br>First Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert19').innerHTML = newSegment;
        document.getElementById('alert19').className = 'alert alert-success text-center';
    }
}


// Function # 20 - Replace last occurance of a character with another character
function replaceLastCharacter() {
    var string = document.getElementById('repLastString').value;
    var originalString = document.getElementById('repLastString').value;
    var character = document.getElementById('repLastFirstCharacter').value;
    var character2 = document.getElementById('repLastSecondCharacter').value;
    var occurance;
    
    var newSegment = '<strong>Please enter the string and both characters!</strong>';
    if (string=='' || character=='' || character2=='') {
        document.getElementById('alert20').innerHTML = newSegment;
        document.getElementById('alert20').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().lastIndexOf(character.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br><strong> Character Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + character2 + string.slice(occurance+1, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br>First Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert20').innerHTML = newSegment;
        document.getElementById('alert20').className = 'alert alert-success text-center';
    }
}


// Function # 21 - Replace all occurances of a character with another in string
function replaceAllCharacter() {
    var string = document.getElementById('repAllString').value;
    var originalString = document.getElementById('repAllString').value;
    var character = document.getElementById('repAllFirstCharacter').value;
    var character2 = document.getElementById('repAllSecondCharacter').value;
    var occurance = [];
    
    var newSegment = '<strong>Please enter both string and character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert21').innerHTML = newSegment;
        document.getElementById('alert21').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string[i].toLowerCase() == character) {
                string = string.slice(0, i) + character2 + string.slice(i+1, string.length);
            }
        }
        occurance = originalString.toLowerCase().indexOf(character.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br><strong> Character Not Found!</strong>';
        } 
        else {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br>First Character: <strong>"' + 
            character + '"</strong><br>Second Character: <strong>"' + character2 + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert21').innerHTML = newSegment;
        document.getElementById('alert21').className = 'alert alert-success text-center';
    }
}


// Function # 22 - Find first occurance of a word in string
function singleWordOccurance() {
    var string = document.getElementById('singleOccuString').value;
    var word = document.getElementById('singleOccuWord').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert22').innerHTML = newSegment;
        document.getElementById('alert22').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().indexOf(word.toLowerCase());

        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + string + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br><strong> Word Not Found!</strong>';
        } 
        else {
            newSegment = 'String: <strong>"' + string + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br> Occurance: <strong>"' + occurance + '"</strong>';
        }

        
        document.getElementById('alert22').innerHTML = newSegment;
        document.getElementById('alert22').className = 'alert alert-success text-center';
    }
}


// Function # 23 - Find last occurance of a word in string
function lastWordOccurance() {
    var string = document.getElementById('lastOccuString').value;
    var word = document.getElementById('lastOccuWord').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert23').innerHTML = newSegment;
        document.getElementById('alert23').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().lastIndexOf(word.toLowerCase());

        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + string + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br><strong> Word Not Found!</strong>';
        } 
        else {
            newSegment = 'String: <strong>"' + string + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br> Occurance: <strong>"' + occurance + '"</strong>';
        }

        
        document.getElementById('alert23').innerHTML = newSegment;
        document.getElementById('alert23').className = 'alert alert-success text-center';
    }
}


// Function # 24 - Search all occurances of a word in string
function allWordOccurance() {
    var string = document.getElementById('allOccuString').value;
    var word = document.getElementById('allOccuWord').value;
    var occurance = '';
    var newSegment = '<strong>Please Enter both String and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert24').innerHTML = newSegment;
        document.getElementById('alert24').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+word.length).toLowerCase() == word.toLowerCase()) {
                occurance = occurance + i + ', ';
            }
            
        }
        if (occurance == '') {
            occurance = 'Not Found';
        }
        else {
            occurance = occurance.slice(0, occurance.length-2);
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Word: <strong>"' + word + 
        '"</strong><br> Occurance: <strong>"' + occurance + '"</strong>';
        document.getElementById('alert24').innerHTML = newSegment;
        document.getElementById('alert24').className = 'alert alert-success text-center';
    }
}


// Function # 25 - Count occurances of a word in string
function countWordOccurance() {
    var string = document.getElementById('countOccuString').value;
    var word = document.getElementById('countOccuWord').value;
    var occurance = 0;
    var newSegment = '<strong>Please Enter both String and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+word.length).toLowerCase() == word.toLowerCase()) {
                occurance = occurance + 1;
            }
            
        }
        if (occurance == 0) {
            occurance = '<strong>"' + word + '"</strong> has no occurance';
        }
        else {
            occurance = '<strong>"' + word + '"</strong> has occured <strong>"' + occurance + '"</strong> times';
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Word: <strong>"' + word + 
        '"</strong><br>' + occurance;
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-success text-center';
    }
}


// Function # 26 - Remove first occurance of a word in a string
function removeFirstWord() {
    var string = document.getElementById('remFirstOccuString').value;
    var originalString = document.getElementById('remFirstOccuString').value;
    var word = document.getElementById('remFirstOccuWord').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().indexOf(word.toLowerCase());

        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br><strong> Word Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + string.slice(occurance+word.length, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-success text-center';
    }
}


// Function # 26 - Remove last occurance of a word in a string
function removeLastWord() {
    var string = document.getElementById('remLastOccuString').value;
    var originalString = document.getElementById('remLastOccuString').value;
    var word = document.getElementById('remLastOccuWord').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.toLowerCase().lastIndexOf(word.toLowerCase());

        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br><strong> Word Not Found!</strong>';
        } 
        else {
            string = string.slice(0, occurance) + string.slice(occurance+word.length, occurance.length);
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-success text-center';
    }
}


// Function # 28 - Remove all occurances of a word in a string
function removeAllWord() {
    var string = document.getElementById('remAllOccuString').value;
    var originalString = document.getElementById('remAllOccuString').value;
    var word = document.getElementById('remAllOccuWord').value;
    var occurance;
    
    var newSegment = '<strong>Please enter both string and single word!</strong>';
    if (string=='' || word=='' || word.match(/[\s]/g)) {
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+word.length).toLowerCase() == word.toLowerCase()) {
                string = string.slice(0, i) + string.slice(i+word.length, string.length);
            }
            
        }

        occurance = originalString.toLowerCase().lastIndexOf(word.toLowerCase());
        if (occurance == -1) {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br><strong> Word Not Found!</strong>';
        } 
        else {
            newSegment = 'Original String: <strong>"' + originalString + '"</strong><br> Word: <strong>"' + 
            word + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-success text-center';
    }
}


// Function # 29 - trim leading white space characters from given string
function trimLeadingCharacters(params) {
    var string = document.getElementById('trimLeadingString').value;
    var originalString = document.getElementById('trimLeadingString').value;
    var whiteSpace = /\s/g;
    var newSegment = '<strong>Please enter the string!</strong>';
    if (string=='') {
        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-danger text-center';
    }
    else {
        while (string[0].match(whiteSpace)) {
            string = string.slice(1, string.length);
        }

        if (!originalString[0].match(whiteSpace)) {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br><strong>"Leading White Space Characters Not Found!"</strong>';
        }
        else {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-success text-center';
    }
}


// Function # 30 - trim trailing white space characters from given string
function trimTrailingCharacters(params) {
    var string = document.getElementById('trimTrailingString').value;
    var originalString = document.getElementById('trimTrailingString').value;
    var whiteSpace = /\s/g;
    var newSegment = '<strong>Please enter the string!</strong>';
    if (string=='') {
        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-danger text-center';
    }
    else {
        while (string[string.length-1].match(whiteSpace)) {
            string = string.slice(0, string.length-1);
        }

        if (!originalString[originalString.length-1].match(whiteSpace)) {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br><strong>"Trailing White Space Characters Not Found!"</strong>';
        }
        else {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-success text-center';
    }
}


// Function # 31 - trim both leading and trailing white space characters from given string
function trimWhiteSpaceCharacters() {
    var string = document.getElementById('trimWhiteSpace').value;
    var originalString = document.getElementById('trimWhiteSpace').value;
    var whiteSpace = /\s/g;
    var newSegment = '<strong>Please enter the string!</strong>';
    if (string=='') {
        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-danger text-center';
    }
    else {
        while (string[0].match(whiteSpace) || string[string.length-1].match(whiteSpace)) {
            if (string[0].match(whiteSpace)) {
                string = string.slice(1, string.length);
            } else {
                string = string.slice(0, string.length-1);
            }   
        }

        if (!originalString[0].match(whiteSpace) && !originalString[originalString.length-1].match(whiteSpace)) {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br><strong>"Leading or Trailing White Space Characters Not Found!"</strong>';
        }
        else {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-success text-center';
    }
}


// Function # 32 - Remove all extra blank spaces from given string
function removeBlankSpaces() {
    var string = document.getElementById('remBlankSpaces').value;
    var originalString = document.getElementById('remBlankSpaces').value;
    var newSegment = '<strong>Please enter the string!</strong>';
    var counter = 0;
    if (string=='') {
        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            while (string.slice(i, i+2) == '  ') {
                string = string.slice(0, i) + string.slice(i+1, string.length);
                counter = counter + 1;
            }
        }
        
        if (counter == 0) {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br><strong>"Extra Blank Spaces Not Found!"</strong>';
        }
        else {
            newSegment = 'Original String: <strong>"' + originalString + 
            '"</strong><br> New String: <strong>"' + string + '"</strong>';
        }

        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-success text-center';
    }
}


// Function # 33 - Frequency of each element in the array
function countElementArray() {
    var string = document.getElementById('couElementArray').value;
    var array = [];
    var word = ''
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (characterString.includes(array[i].toLowerCase())) {
                index = characterString.indexOf(array[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(array[i].toLowerCase());
                occurance.push(1);
            }
        }
        for (var y=0; y<occurance.length; y++) {
            statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
            occurance[y] + '"</strong>';
        }


        newSegment = 'Array: <strong>[' + array + ']</strong><br> Character : Frequency' + statement;
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-success text-center';
    }
}


// Function 34 - Print all unique elements in the array
function printUniqueElements() {
    var string = document.getElementById('priUniqueElements').value;
    var array = [];
    var word = ''
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (characterString.includes(array[i].toLowerCase())) {
                index = characterString.indexOf(array[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(array[i].toLowerCase());
                occurance.push(1);
            }
        }
        for (var y=0; y<occurance.length; y++) {
            if (occurance[y] == 1) {
                statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
                occurance[y] + '"</strong>';
            }
        }


        newSegment = 'Array: <strong>[' + array + ']</strong><br> Character : Frequency' + statement;
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-success text-center';
    }
}


// Function # 35 - Count total number of duplicate elements in the array
function countDuplicateElements() {
    var string = document.getElementById('couDuplicateElements').value;
    var array = [];
    var word = ''
    var characterString = [];
    var occurance = [];
    var index;
    var statement = '';
    var counter = 0;
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (characterString.includes(array[i].toLowerCase())) {
                index = characterString.indexOf(array[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(array[i].toLowerCase());
                occurance.push(1);
            }
        }
        for (var y=0; y<occurance.length; y++) {
            if (occurance[y] > 1) {
                statement = statement + '<br><strong>"' + characterString[y] + '"</strong> : <strong>"' + 
                occurance[y] + '"</strong>';
                counter += 1;
            }
        }


        newSegment = 'Array: <strong>[' + array + ']</strong><br> Character : Frequency' + statement + 
        '<br>There are <strong>"' + counter + '"</strong> duplicate elements in this array';
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-success text-center';
    }
}


// Function # 36 - Delete all duplicate elements from the array
function deleteDuplicateElements() {
    var string = document.getElementById('delDuplicateElements').value;
    var array = [];
    var oldArray = [];
    var word = '';
    var characterString = [];
    var occurance = [];
    var index;
    var counter = 0;
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                oldArray.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            oldArray.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (characterString.includes(array[i].toLowerCase())) {
                index = characterString.indexOf(array[i].toLowerCase());
                occurance[index] = occurance[index] + 1;
            }
            else {
                characterString.push(array[i].toLowerCase());
                occurance.push(1);
            }
        }
        for (var y=0; y<occurance.length; y++) {
            if (occurance[y] > 1) {
                for (z=0; z<array.length; z++) {
                    if (array[z] == characterString[y]) {
                        array.splice(z,1);
                    }
                }
                counter += 1;
            }
        }

        newSegment = 'Old Array: <strong>[' + oldArray + ']</strong><br> New Array: <strong>[' + array + 
        ']</strong><br>There were <strong>"' + counter + '"</strong> duplicate elements in this array';
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-success text-center';
    }
}


// Function # 37 - Merge two array to third array
function mergeTwoArrays() {
    var string = document.getElementById('merTwoArrays').value;
    var string2 = document.getElementById('merTwoArrays2').value;
    var array = [];
    var secondArray = [];
    var thirdArray = []
    var word = '';
    var newSegment = '<strong>Please Enter both arrays separated by comma(,)!</strong>';
    if (string=="" || string2 == "") {
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-danger text-center';
    }
    else {
        // First and Second Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                thirdArray.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            thirdArray.push(word);
            word = '';
        }
        // Second and Third Array
        for (var j=0; j<string2.length; j++) {
            if (string2.slice(j, j+1) != ' ' && string2.slice(j, j+1) != ','){
                word = word + string2.slice(j, j+1);
            }
            else if (word != ''){
                secondArray.push(word);
                thirdArray.push(word);
                word = '';
            }
        }
        if (word != '') {
            secondArray.push(word);
            thirdArray.push(word);
            word = '';
        }

        newSegment = 'First Array: <strong>[' + array + ']</strong><br> Second Array: <strong>[' + secondArray + 
        ']</strong><br> Third Array: <strong>[' + thirdArray + ']</strong>';
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-success text-center';
    }
}


// Function # 38 - Find reverse of an array
function reverseArray() {
    var string = document.getElementById('revArray').value;
    var array = [];
    var reverseArray = [];
    var word = '';
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            word = '';
        }
        // Reverse Array
        for (var j=0; j<array.length; j++) {
            reverseArray.unshift(array[j]);
        }
        

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Reversed Array: <strong>[' + reverseArray + 
        ']</strong>';
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-success text-center';
    }
}


// Function # 39 - Seperate even and odd elements of array in two separate array
function separateOddEvenElements() {
    var string = document.getElementById('sepOddEvenElements').value;
    var array = [];
    var oddArray = [];
    var evenArray = [];
    var word = '';
    var newSegment = '<strong>Please Enter numerical separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<.>?/|]/g)) {
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            word = '';
        }
        // Sepration of Odd and Even Elements in two Arrays
        for (var j=0; j<array.length; j++) {
            if (array[j]%2 == 0) {
                evenArray.push(array[j]);
            } else {
                oddArray.push(array[j]);
            }
        }
        

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Odd Array: <strong>[' + oddArray + 
        ']</strong><br> Even Array: <strong>[' + evenArray + ']</strong>';
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-success text-center';
    }
}


// Function # 40 - Search an element in the array
function searchElementArray() {
    var string = document.getElementById('seaElement').value;
    var array = [];
    var element = document.getElementById('searchElement').value;
    var status = 0;
    var statement = '';
    var word = '';
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="" || element == "" || element.match(' ')) {
        document.getElementById('alert40').innerHTML = newSegment;
        document.getElementById('alert40').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            word = '';
        }
        // Search Loop
        for (j=0; j<array.length; j++) {
            if (array[j] == element) {
                statement = statement + j + ', '
                status = status + 1;
            }
        }
        if (statement != '') {
            statement = statement.slice (0, statement.length-2);
        }

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Element: <strong>"' + element + 
        '"</strong><br> Occured At: <strong>[' + statement + ']</strong><br> This element has occured <strong>"' +
        status + '"</strong> times';
        document.getElementById('alert40').innerHTML = newSegment;
        document.getElementById('alert40').className = 'alert alert-success text-center';
    }
}


// Function # 41 - Sort array elements in ascending or descending order
function sortArray(order) {
    var string = document.getElementById('sorArray').value;
    var type = order;
    var originalArray = [];
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter the numerical array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<.>?/|]/g)) {
        document.getElementById('alert41').innerHTML = newSegment;
        document.getElementById('alert41').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(parseInt(word));
                originalArray.push(parseInt(word));
                word = '';
            }
        }
        if (word != '') {
            array.push(parseInt(word));
            originalArray.push(parseInt(word));
            word = '';
        }
        
        // Arranging Array
        var temp;
        if (type == 'dsc') {
            for (var j=0; j<array.length; j++) {
                for (var k=0; k<array.length; k++) {
                    if (array[j] > array[k]) {
                        temp = array[j];
                        array[j] = array[k];
                        array[k] = temp;
                    }
                }
            }
        } else {
            for (var l=0; l<array.length; l++) {
                for (var m=0; m<array.length; m++) {
                    if (array[l] < array[m]) {
                        temp = array[l];
                        array[l] = array[m];
                        array[m] = temp;
                    }
                }
            }
        }
        

        newSegment = 'Original Array: <strong>[' + originalArray + ']</strong><br> New Array: <strong>[' +
        array + ']</strong>'
        document.getElementById('alert41').innerHTML = newSegment;
        document.getElementById('alert41').className = 'alert alert-success text-center';
    }
}


// Function # 42 - Sort even and odd elements of array separately
function sortOddEvenArray(order) {
    var string = document.getElementById('sorOddEvenArray').value;
    var type = order;
    var array = [];
    var originalArray = [];
    var oddArray = [];
    var evenArray = [];
    var word = '';
    var newSegment = '<strong>Please Enter numerical array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<.>?/|]/g)) {
        document.getElementById('alert42').innerHTML = newSegment;
        document.getElementById('alert42').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(parseInt(word));
                originalArray.push(parseInt(word));
                word = '';
            }
        }
        if (word != '') {
            array.push(parseInt(word));
            originalArray.push(parseInt(word));
            word = '';
        }

        // Arranging Array
        var temp;
        if (type == 'dsc') {
            for (var j=0; j<array.length; j++) {
                for (var k=0; k<array.length; k++) {
                    if (array[j] > array[k]) {
                        temp = array[j];
                        array[j] = array[k];
                        array[k] = temp;
                    }
                }
            }
        } else {
            for (var l=0; l<array.length; l++) {
                for (var m=0; m<array.length; m++) {
                    if (array[l] < array[m]) {
                        temp = array[l];
                        array[l] = array[m];
                        array[m] = temp;
                    }
                }
            }
        }

        // Sepration of Odd and Even Elements in two Arrays
         for (var j=0; j<array.length; j++) {
            if (array[j]%2 == 0) {
                evenArray.push(array[j]);
            } else {
                oddArray.push(array[j]);
            }
        }
        

        newSegment = 'Original Array: <strong>[' + originalArray + ']</strong><br> Arranged Array: <strong>[' + 
        array + ']</strong><br> Even Array: <strong>[' + evenArray + ']</strong><br> Odd Array: <strong>[' + 
        oddArray + ']</strong>';
        document.getElementById('alert42').innerHTML = newSegment;
        document.getElementById('alert42').className = 'alert alert-success text-center';
    }
}


// Function # 43 - Left rotate an Array
function leftRotateArray() {
    var string = document.getElementById('lefRotateArray').value;
    // var type = order;
    var array = [];
    var originalArray = [];
    // var rotation = 1;
    var word = '';
    var newSegment = '<strong>Please Enter am array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert43').innerHTML = newSegment;
        document.getElementById('alert43').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                originalArray.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            originalArray.push(word);
            word = '';
        }

        // Left Rotate Array
        var temp = array[0];
        for (var j=0; j<array.length; j++) {
            array[j] = array[j+1];
        }
        array[array.length-1] = temp;


        newSegment = 'Original Array: <strong>[' + originalArray + ']</strong><br> Rotated Array: <strong>[' + 
        array + ']</strong>';
        document.getElementById('alert43').innerHTML = newSegment;
        document.getElementById('alert43').className = 'alert alert-success text-center';
    }
}


// Function # 44 - Right rotate an array
function rightRotateArray() {
    var string = document.getElementById('rigRotateArray').value;
    // var type = order;
    var array = [];
    var originalArray = [];
    // var rotation = 1;
    var word = '';
    var newSegment = '<strong>Please Enter an array eparated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert44').innerHTML = newSegment;
        document.getElementById('alert44').className = 'alert alert-danger text-center';
    }
    else {
        // Array
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                originalArray.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            originalArray.push(word);
            word = '';
        }

        // Left Rotate Array
        var temp = array[array.length-1];
        for (var j=array.length-1; j>=0; j--) {
            array[j] = array[j-1];
        }
        array[0] = temp;


        newSegment = 'Original Array: <strong>[' + originalArray + ']</strong><br> Rotated Array: <strong>[' + 
        array + ']</strong>';
        document.getElementById('alert44').innerHTML = newSegment;
        document.getElementById('alert44').className = 'alert alert-success text-center';
    }
}


// Function # 45 - Sum of all natural numbers between 1 to n
function sumOfNaturalNumbers() {
    var string = document.getElementById('sumNaturalNumbers').value.toString();
    var sum = 0;
    var newSegment = '<strong>Please Enter a Single Number!</strong>';
    if (string=="" || string.match(/\D/g)) {
        document.getElementById('alert45').innerHTML = newSegment;
        document.getElementById('alert45').className = 'alert alert-danger text-center';
    }
    else {

        // Sum Loop
        string = parseInt(string);
        for (var j=1; j<= string; j++) {
            sum += j;
        }


        newSegment = 'Entered Number: <strong>"' + string + '"</strong><br> Sum: <strong>"' + 
        sum + '"</strong>';
        document.getElementById('alert45').innerHTML = newSegment;
        document.getElementById('alert45').className = 'alert alert-success text-center';
    }
}


// Function # 46 - Sum of all even numbers between 1 to n
function sumOfEvenNumbers() {
    var string = document.getElementById('sumEvenNumbers').value.toString();
    var sum = 0;
    var newSegment = '<strong>Please Enter a Single Number!</strong>';
    if (string=="" || string.match(/\D/g)) {
        document.getElementById('alert46').innerHTML = newSegment;
        document.getElementById('alert46').className = 'alert alert-danger text-center';
    }
    else {

        // Sum Loop
        string = parseInt(string);
        for (var j=0; j<= string; j++) {
            if (string%2 == 0) {
                sum = sum + j;
            }
        }


        newSegment = 'Entered Number: <strong>"' + string + '"</strong><br> Sum: <strong>"' + 
        sum + '"</strong>';
        document.getElementById('alert46').innerHTML = newSegment;
        document.getElementById('alert46').className = 'alert alert-success text-center';
    }
}