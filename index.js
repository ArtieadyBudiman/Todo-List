const todo = document.getElementById("list");
const red = "red";
const blue = "blue";
const green = " green";
const color =[red, green, blue];
let i = 0;

const add = ()=>{
    //condition for todo list color
    if(i===color.length){i=0;};
    
    //get input value
    let input = document.getElementById("input");
    
    //add new list
    let newList =   `<li>
                        <span class="${color[i]}" onclick="toggle(this)">${input.value}</span>
                        <button onclick="removeList(this)">Hapus</button>
                    </li>`
    todo.insertAdjacentHTML("beforebegin", newList);
    i++;

    //clear the field
    input.value = "";
};

const toggle = (el)=>{
    el.classList.toggle("done");
};

const removeList = (el)=>{
    el.parentElement.remove();
};

