'use strict'

let input = document.getElementById('input_task')
let btnAdd = document.getElementById('add_btn')
let out = document.getElementById('output')
let i = 0;
btnAdd.addEventListener('click',function(){
    i++
    let inputValue = input.value;
    if(inputValue){
        // p adding
        let p = document.createElement('p')
        p.innerText = inputValue;

        // delete btn adding
        let delbtn = document.createElement('button')
        delbtn.innerHTML = 'del';
        // delbtn.classList.add('btn','btn-primary','delbtn')
        if (i%2==0) {
            delbtn.classList.add('mybtn', 'btn','delbtn')
        }else{
            delbtn.classList.add('btn','delbtn','btn-primary')
        }
        // row 'child' addiong
        let child = document.createElement('div')
        child.classList.add('d-flex','justify-content-between','child','p-2','mt-1')
        // add p and btn to child
        child.appendChild(p)
        child.appendChild(delbtn)
        if (i%2==0) {
            child.classList.add('text-bg-secondary')
        }else{
            child.classList.add('text-bg-light')
        }
        // add child to output
        out.appendChild(child)        
    }
})
// نضيف حدث كليك للعنصر الذي يعرض  الخرج 
// ثم نتحقق اذا كان الكليك قد تم على زر الحذف
// event
// يعيد كائن الحدث وهو يحتوي معلومات عن الحدث مثل العنصر الذي تم الحدث عليه ومثلا الاعدادات الافتراضية ونوع الحدث
// event.target
// يعيد العنصر الذي تم عليه الحدث
out.addEventListener('click',function(event){
    if(event.target.classList.contains('delbtn')){
        event.target.parentElement.remove();
    }
})

 

