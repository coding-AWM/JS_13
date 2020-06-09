// let message = prompt('Напишите произвольное предложение');
// let length = prompt('Напишите цифрами длинну сообщения, которую надо оставить');

message = 5555;
length = 5;

function cutOff (mess, leng) {

    if (typeof message != typeof ' ') {
        console.log('FALSE');
        alert('Введите число');
    }  else {
        console.log('TRUE');
        return mess.slice(0, leng);
    }    
}
console.log(cutOff(message, length) + ' ' + '. . . ');
