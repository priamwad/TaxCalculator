var income = 100000;
var federal_income_tax = FederalIncomeTax(income);
var state_income_tax  = StateIncomeTax(income);
var fica_tax = FicaTax(income);

printResult();

//calculates the federal income tax
function FederalIncomeTax (income){
  var it = 0; // short for income tax
  var c = 0; // short for counter
  while(c < income){
    if(c > 0 && c <= 9700){
      it += 1*.10;
    }else if (c > 9700 &&  c <= 39475 ){
      it += 1*.12;
    }else if (c > 39475 &&  c <= 84200 ){
      it += 1*.22;
    }else if (c > 84201 &&  c <= 160725 ){
      it += 1*.24;
    }else if (c > 160725 &&  c <= 204100 ){
      it += 1*.32;
    }else if (c > 39475 &&  c <= 510300 ){
      it += 1*.35;
    }else{
      it += 1*.37;
    }
    c++;
  }
  return it;
}

//calculates the state income tax
function StateIncomeTax(income){
  var c = 0; //short for counter
  var it = 0;
  while(c < income){
    if(c >= 0 && c <= 3230){
      it+= 1*.0246;
    }else if (c >= 3231 && c <= 19330){
      it+= 1*.0351;
    }else if (c >= 19331 && 31 <= 31160){
      it += 1*.0501;
    }else{
      it += 1*.0686;
    }
    c++;
  }
  return it;
}

//calculates Fica tax
function FicaTax(income){
  taxfica =  income * .0765;
  if(taxfica > 8239.80){
    taxfica = 8239.80
  }
  return taxfica;
}

function printResult(){
  console.log("------------------------------------------------------")
  console.log("Federal Income tax: $"+Math.ceil(federal_income_tax));
  console.log("State Income Tax: $"+Math.ceil(state_income_tax));
  console.log("Fica Tax:  $"+ Math.ceil(fica_tax));
  console.log("Income After Taxes: $"+ Math.ceil((income - federal_income_tax - state_income_tax - fica_tax)));
  console.log("------------------------------------------------------")
}
