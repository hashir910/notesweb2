

let savebtn = document.getElementById('save-btn');
let reloadbtn = document.getElementById('reload');

let notesec = document.getElementById('textarea');
let savecont = document.querySelector(`.note-cont`);

let reloadfunc = () => {
 
    notesec.value = '';
}
reloadbtn.addEventListener('click', () => {

    reloadfunc();
})



savebtn.addEventListener('click', (e) => {

   
    let notesval = notesec.value;
    let get_item = localStorage.getItem('notes');
    if (get_item == null) {
        notesobj = [];
    }
    else {
        notesobj =JSON.parse(get_item)
    }
    console.log(get_item)
    notesobj.push(notesval);

    let store = localStorage.setItem('notes', JSON.stringify(notesobj));
    reloadfunc();
    shownotes();
})


// let show notes

function shownotes(element, index) {
    let notesval=notesec.value;
    let get_item = localStorage.getItem('notes');
    if (get_item == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(get_item);
    }

    let html ='';

    notesobj.forEach( function(element,index) {
         html+= `
         <div class="card">
         <div class="card-head">
         <div class="sub-head"><span></span>Note-${index+1}</div>
         <div class="x-btn"><i class="bi bi-x-lg"  id ='${index}' onclick='deletefunc(this.id)'></i></div>
         </div>
         <div class="card-article">${element}</div>
     </div>`

    });
    if(notesobj.length!==0){
        savecont.innerHTML=html;
    }
    else{

        savecont.innerHTML='Use the notes portion to add notes.....';
    }
   
    
}    
shownotes();

function deletefunc(index){
    let notesval=notesec.value;
    let get_item = localStorage.getItem('notes');
    if (get_item == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(get_item);
    }


    notesobj.splice(index,1)
    let store = localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes();
}