const imgBtn = document.querySelector('#img_btn'),
      inputYears = document.querySelector('#years'),
      inputMonths = document.querySelector('#months'),
      inputDays = document.querySelector('#days'),
      displayYear = document.querySelector('.year-text'),
      displayMonth = document.querySelector('.month-text'),
      dsiplayDay = document.querySelector('.day-text');
      form = document.querySelector('form');
      allInput = form.querySelectorAll('.first input');
      warningmsgYear = form.querySelector('#warningmsgYear');
      warningmsgMonth = form.querySelector('#warningmsgMonth');
      warningmsgday = form.querySelector('#warningmsgDay');
      inputOutline = form.querySelectorAll('input');


imgBtn.addEventListener('click', () =>{

/* ========== getting my variables for current date ======= */

    let date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate() + 1;
        

/* ========== Storing my value as Interger value ======= */

        inputYearsValue = parseInt(inputYears.value);
        inputMonthsValue = parseInt(inputMonths.value);
        inputDaysValue = parseInt(inputDays.value);

/* ========== Finding the difference the ages ======= */

        
        remainingYear = year - `${inputYearsValue}`;
        remainingMonth = month -  `${inputMonthsValue}`;
        remainingDay = day -  `${inputDaysValue}`;


 /*  ========== Conditon for Validating the input values ======= */

        allInput.forEach(input => {

        if(inputDays.value == '' && inputMonths.value == ''  && inputYears.value == ''){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">This field is required</p>`;
            warningmsgMonth.innerHTML = `<p id="warningmsgMonth">This field is required</p>`;
            warningmsgYear.innerHTML = `<p id="warningmsgYear">This field is required</p>`;
        }
        else if( inputDays.value == '' && inputMonths.value !=  '' && inputYears.value != ''){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">This field is required</p>`;
            warningmsgMonth.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
        }
        else if( inputDays.value != '' && inputMonths.value == '' && inputYears.value != ''){
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgMonth.innerHTML = `<p id="warningmsgMonth">This field is required</p>`;
            warningmsgday.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
        }
        else if( inputDays.value != '' && inputMonths.value != ''  && inputYears.value == ''){
            displayYear.innerHTML = `<span class="year-text">--</span>`
            warningmsgYear.innerHTML = `<p id="warningmsgYear">This field is required</p>`;
            warningmsgday.innerHTML = ``;
            warningmsgMonth.innerHTML = ``;
        }
        else if( inputDays.value == '' && inputMonths.value == '' && inputYears.value != ''){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">This field is required</p>`;
            displayMonth.innerHTML = `<span class="year-text">--</span>`;
            warningmsgMonth.innerHTML = `<p id="warningmsgMonth">This field is required</p>`;
            warningmsgYear.innerHTML = ``;
        }
        else if( inputDays.value == '' && inputMonths.value != '' && inputYears.value == ''){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">This field is required</p>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`
            warningmsgYear.innerHTML = `<p id="warningmsgYear">This field is required</p>`;
            warningmsgMonth.innerHTML = ``;
        }
        else if( inputDays.value != '' && inputMonths.value == '' && inputYears.value == ''){
            displayMonth.innerHTML = `<span class="year-text">--</span>`;
            warningmsgMonth.innerHTML = `<p id="warningmsgMonth">This field is required</p>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`
            warningmsgYear.innerHTML = `<p id="warningmsgYear">This field is required</p>`;
            warningmsgday.innerHTML = ``;
        }
        else if(inputMonths.value == 2 && inputDays.value > 29 ){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">Enter corrresponding <br/> day with month</p>`;
            warningmsgMonth.innerHTML = ``;
            warningmsgYear.innerHTML = ``;    
            form.style.color = 'red';
            input.style.outline = '.5px ridge red';
            input.style.border = 'none';
            return;
        }

        else
        if(inputMonths.value == 4 && inputDays.value > 30 || inputMonths.value == 6 && inputDays.value > 30 || inputMonths.value == 9 && inputDays.value > 30 ){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">Enter corrresponding <br/> day with month</p>`;
            warningmsgMonth.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
            form.style.color = 'red';
            input.style.outline = '.5px ridge red';
            input.style.border = 'none';    
            return;
        }
        else
        if(inputYears.value < 0){
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgYear.innerHTML = `<p id="warningmsgYear">Must be a valid year</p>`;
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            warningmsgMonth.innerHTML = ``;
            warningmsgday.innerHTML = ``;
        }
        else if (inputYears.value > year){
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgYear.innerHTML = `<p id="warningmsgYear">Must be in the past</p>`;
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            warningmsgMonth.innerHTML = ``;
            warningmsgday.innerHTML = ``;
        }
              
        else if (inputMonths.value < 1 || inputMonths.value > 12 ){
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            warningmsgMonth.innerHTML = `<p id="warningmsgMonths">Must be a valid month</p>`;
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`;
            warningmsgday.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
        }

        else if ( inputDays.value < 1 || inputDays.value > 31 ){
            dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
            warningmsgday.innerHTML = `<p id="warningmsgDay">Must be a valid day</p>`;
            displayMonth.innerHTML = `<span class="month-text">--</span>`;
            displayYear.innerHTML = `<span class="year-text">--</span>`; 
            warningmsgMonth.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
        }

/* ========== Conditon for geting valid styling form input and text. ======= */

        
        if(inputYears.value == '' || inputMonths.value == '' ||  inputDays.value == '' || inputYears.value < 0 || inputMonths.value < 1 || inputDays.value < 1 || inputYears.value > year || inputMonths.value > 12 || inputDays.value > 31 ){
            form.style.color = 'red';
            input.style.outline = '.5px ridge red';
            input.style.border = 'none';
            return;
        }
        else{
            form.style.color = 'black';
            input.style.outline = '.5px ridge green';
            input.style.border = 'none';
            warningmsgday.innerHTML = ``;
            warningmsgMonth.innerHTML = ``;
            warningmsgYear.innerHTML = ``;
            dsiplayDay.innerHTML = `${remainingDay}`
            displayMonth.innerHTML = `${remainingMonth}`;
            displayYear.innerHTML = `${remainingYear}`;
        }
/* ========== Conditon for geting valid calculating Values. ======= */
        

        if(remainingDay < 0 && remainingMonth < 0 || remainingDay < 0 && remainingMonth == 0){
           let remainingDaye = 30 + remainingDay;
               remainingMonthe = (remainingMonth + 12) - 1;
               remainingYeare = remainingYear - 1;

            if( remainingYeare < 0 ){
                dsiplayDay.innerHTML = `<span class="day-text">--</span>`;
                displayMonth.innerHTML = `<span class="month-text">--</span>`;
                displayYear.innerHTML = `<span class="year-text">--</span>`;
                warningmsgday.innerHTML = `<p id="warningmsgDay">Enter valid input.</p>`;
                warningmsgMonth.innerHTML = `<p id="warningmsgMonth">Enter valid input.</p>`;
                warningmsgYear.innerHTML = `<p id="warningmsgYear">You can not live in future</p>`; 
                form.style.color = 'red';
                input.style.outline = '.5px ridge red';
                input.style.border = 'none';
            }
            displayYear.innerHTML = `${remainingYeare}`;
            displayMonth.innerHTML = `${remainingMonthe}`;        
            dsiplayDay.innerHTML = `${remainingDaye}`;
        }
        else 
        if(remainingMonth < 0 ){
        let remainingMonthe = 12 + remainingMonth;
            remainingYeare = remainingYear - 1;
            displayMonth.innerHTML = `${remainingMonthe}`;
            displayYear.innerHTML = `${remainingYeare}`;
        }
        else
        if(remainingDay < 0 ){
            let remainingDaye = 30 + remainingDay;
                remainingMonthe = remainingMonth - 1;
            dsiplayDay.innerHTML = `${remainingDaye}`;
            displayMonth.innerHTML = `${remainingMonthe}`;        
        }

    });
    return;
});     