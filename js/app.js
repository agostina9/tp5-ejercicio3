let input= document.querySelector('input');
let agregarBtn=document.querySelector('.btn-add');
let ul=document.querySelector('ul');
let sinTareas=document.querySelector('.sinTareas');

agregarBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let text= input.value;
    if(text !== ''){

        let li=document.createElement('li');
        let p= document.createElement('p');
        p.textContent=text;
    
        li.appendChild(p);
        li.appendChild(agregarEliminarBtn());
        ul.appendChild(li);
    
        input.value='';
        sinTareas.style.display='none';
    }
});

function agregarEliminarBtn(){
    let eliminarBtn=document.createElement('button');
    eliminarBtn.textContent='X';
    eliminarBtn.className='btn-eliminar';

    eliminarBtn.addEventListener('click', (e)=>{
       let item =e.target.parentElement;
        ul.removeChild(item);

        let items=document.querySelectorAll('li');
        if(items.length===0){
            sinTareas.style.display='block';
        }
    });
    return eliminarBtn;
}