let form=document.createElement('div');
let  heading=document.createElement('h1');
//heading.setAttribute('class','text-center');
heading.innerText='Form';
form.appendChild(heading);

form.setAttribute('class','container d-flex flex-column justify-content-center');
document.body.appendChild(form);

let lableFirstName=document.createElement('label');
lableFirstName.setAttribute('for','firstName');
lableFirstName.textContent='First Name:';
let firstName=document.createElement('input');
firstName.setAttribute('name','firstName');
firstName.setAttribute('type','text');
firstName.setAttribute('id','firstName');
form.append(lableFirstName,firstName);

let lableLastName=document.createElement('label');
lableLastName.setAttribute('for','lastName');
lableLastName.setAttribute('type','text');
lableLastName.textContent='Last Name:';
let lastName=document.createElement('input');
lastName.setAttribute('name','lastName');
lastName.setAttribute('id','lastName');
form.append(lableLastName,lastName);

let lableaddress=document.createElement('label');
lableaddress.setAttribute('for','address');
lableaddress.setAttribute('type','address');
lableaddress.textContent='Address:';
let address=document.createElement('input');
address.setAttribute('name','address');
address.setAttribute('id','address');
form.append(lableaddress,address);


let lablePinCode=document.createElement('label');
lablePinCode.setAttribute('for','pincode');
lablePinCode.setAttribute('type','number');
lablePinCode.textContent='Pin Code:';
let pinCode=document.createElement('input');
pinCode.setAttribute('name','pincode');
pinCode.setAttribute('id','pincode');
form.append(lablePinCode,pinCode);

let labelGender=document.createElement('label');
labelGender.textContent='Gender:';
let gender=document.createElement('select');
gender.setAttribute('id','gender');
gender.innerHTML='<option>--Select--</option><option value=male>Male</option><option value=female>Female</option>';
//lableGender.innerHTML='';
form.append(labelGender,gender);


let labelFood=document.createElement('label');
labelFood.textContent='Food:';
let food=document.createElement('select');
food.setAttribute('id','food');
food.innerHTML='<option>--Select--</option><option value=briyani>Briyani</option><option value=porato>Porato</option><option value=friedrice>Fried Rice</option><option value=butternana>Butter Nana</option><option value=sambarrice>Sambar Rice</option>'
form.append(labelFood,food);

let lableState=document.createElement('label');
lableState.setAttribute('for','state');
lableState.setAttribute('type','text');
lableState.textContent='State:';
let state=document.createElement('input');
state.setAttribute('name','state');
state.setAttribute('id','state');
form.append(lableState,state);

let br=document.createElement('br');
form.appendChild(br);

let lableCountry=document.createElement('label');
lableCountry.setAttribute('for','country');
lableCountry.setAttribute('type','text');
lableCountry.textContent='Country:';
let country=document.createElement('input');
country.setAttribute('name','country');
country.setAttribute('id','country');
form.append(lableCountry,country);

form.appendChild(br);

let submitButton=document.createElement('input');
submitButton.setAttribute('id','submit');
submitButton.setAttribute('type','submit');
form.appendChild(submitButton);

  let table=document.createElement('table');
  table.setAttribute('class','table ');
  table.innerHTML='<tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Pin Code</th><th>Gender</th><th>Food</th><th>State</th><th>Country</th></tr><tbody id=tableBody></tbody>';

document.body.appendChild(table);

let submit=document.getElementById('submit');

submit.addEventListener('click',function(){
        let firstNm=document.getElementById('firstName');
        let lastNm=document.getElementById('lastName');
        let address=document.getElementById('address');
        let pincode=document.getElementById('pincode');
        let gender=document.getElementById('gender');
        let food=document.getElementById('food');
        let state=document.getElementById('state');
        let country=document.getElementById('country');

        let tableBody=document.getElementById('tableBody');
        let newrow=document.createElement('tr');
        var firstnameCell = document.createElement('td');
        var lastnameCell = document.createElement('td');
        var addressCell = document.createElement('td');
        var pincodeCell = document.createElement('td');
        var genderCell = document.createElement('td');
        var foodCell = document.createElement('td');
        var stateCell = document.createElement('td');
        var countryCell = document.createElement('td');

        firstnameCell.textContent=firstNm.value;
        lastnameCell.textContent=lastNm.value;
        addressCell.textContent=address.value;
        pincodeCell.textContent=pincode.value;
        genderCell.textContent=gender.value;
        foodCell.textContent=food.value;
        stateCell.textContent=state.value;
        countryCell.textContent=country.value;
    
        newrow.append(firstnameCell,lastnameCell,addressCell,pincodeCell,genderCell,foodCell,stateCell,countryCell);
        tableBody.appendChild(newrow);
        firstNm.value='';
        lastNm.value='';
        address.value='';
        pincode.value='';
        gender.value='--select--';
        food.value='--select--';
        state.value='';
        country.value='';
        
        //table.innerHTML=`<tr><td>${firstNm.value}</td><td>${lastNm.value}</td><td>${address.value}</td><td>${pincode.value}</td><td>${gender.value}</td><td>${food.value}</td><td>${state.value}</td><td>${country.value}</td></tr>`;
        

});