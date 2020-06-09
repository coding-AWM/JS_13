// let message = prompt('Напишите произвольное предложение');
// let length = prompt('Напишите цифрами длинну сообщения, которую надо оставить');

message = 'fhsfhkjlkskuyghvbnkmfdsghfbslf';
length = 5;

function cutOff (mess, leng) {

    if (message !== '0') {
        console.log('TRUE');
        return mess.slice(0, leng);
    }  else {
        console.log('FALSE');
    }
    // else {
    //     alert('Введите текствотове сообщение');
    // }
    // return mess.slice(0, leng);
}
console.log(cutOff(message, length) + ' ' + '. . . ');
// console.log(typeof cutOff(message, length));
// console.log(typeof (cutOff(message, length)) === typeof '');

//Затыка. если раскоментировать то пишет переполнение стека. час уже сижу бьюсь. 
//в выводах в конце. проверка  работает. треотий лог. как его пихаю в ИФ, всё. куда копать то?
//да и проверка показыает что даже математические знаки она делает строкой. 