message = '123456789012345678901234567890123';
length = 30;

function cutOff (mess, leng) {

    if (typeof message != typeof ' ') {
        console.log('FALSE');
        alert('Введите число');
    }  else {
        console.log('TRUE');
        return mess.slice(0, leng);
    }    
}
console.log(cutOff(message, length) + ' ' + '... ');
