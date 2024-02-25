    'use strict'

    const inputText = document.getElementById('input-text');
    const addTaskBtn =  document.getElementById('btn-addtask');

    const date =  document.getElementById('date');

    const submitBtn = document.getElementById('btn-submit');
    const taskRecordedBtn = document.getElementById('btn-recorded');

    const display = document.querySelector('.display-box');
    const hElement =  document.querySelector('.display-box h2'); 
    const orderedList = document.createElement('ol');

    display.appendChild(orderedList);

    const record = {};

    function captureData(capturedText, capturedDate){
        for(let i=0; i< Object.keys(record).length; i++){
            if(Object.keys(record).length == 0){
                record[`data${i+1}`] = {};
                record[`data${i+1}`]['date'] = [];
                record[`data${i+1}`]['task'] = [];
                record[`data${i+1}`]['task'].push(capturedDate);
                record[`data${i+1}`]['task'].push(capturedText);
            }
            else if(Object.keys(record).length > 0) {
                if(record[`data${i+1}`]['date'][0] == capturedDate){
                    i++;
                    record[`data${i+1}`] = {};
                    record[`data${i+1}`]['date'] = [];
                    record[`data${i+1}`]['task'] = [];
                    record[`data${i+1}`]['date'].push(capturedDate);
                    record[`data${i+1}`]['task'].push(capturedText); 
                }
                else {
                    record[`data${i+1}`]['date'].push(capturedDate);
                    record[`data${i+1}`]['task'].push(capturedText); 
                }
            }
        }
        
    }

    function displayData(capturedText, capturedDate){
        hElement.innerHTML =  capturedDate;
        let liElement = document.createElement('li');
        liElement.textContent =  capturedText
        orderedList.appendChild(liElement);
        display.appendChild(orderedList);
    }

    addTaskBtn.addEventListener('click',function(){
        let capturedText  = inputText.value;
        let capturedDate = date.value;
        displayData(capturedText, capturedDate);
        console.log(record);    
    })

    submitBtn.addEventListener('click', function(){
        let capturedText  = inputText.value;
        let capturedDate = date.value;
        captureData(capturedDate, capturedText)
    })