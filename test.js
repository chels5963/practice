function onButtonClick() {
    
    let li = document.createElement('li');
    let inputText = document.forms.form1.taskInfo.value;
    li.innerText = inputText;
    li.className = 'list-group-item';

    document.getElementById('taskArea').appendChild(li);
};







    
    
 




