function addTask()
{
    var input=document.getElementById("taskInput");
    var tastText=input.ariaValueMax;
    if(tastText==""){
        alert("Enter the task");
        return;
    }
    var li=document.createElement("li");
    li.innerText=tastText;
    document.getElementById("taskList").appendChild(li);
    input.value=""
}