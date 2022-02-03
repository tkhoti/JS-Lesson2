// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:

function sumofpositives(...args) {
    let sum=0;
    for (let item of args) {
        if(item>0) {
            sum=sum+item;
        }
        
    }
    return sum;
}

let a = sumofpositives(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(a);



// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:


let sumofnumbers = (...numbers) => {
    let sum=0;
    for (let item of numbers) {
        if(item>0) {
            sum=sum+item;
        }
        
    }
    console.log(sum);

}

sumofnumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);


// 3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: ,'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  let jointname= (a) => {
      if (a.isloggedin) {
          return a.firstname+' '+a.lastname;
      } else {return false;}
  }

  let a=jointname(user);
  console.log(a);


// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


let max= (array) => {
    let maxnum=array[0][0];
    for (const i of array) {  
        for (const j of i) {
            if(j>maxnum){
                maxnum=j;
            }
            
        }        
        
    }
    return maxnum;
}

let a = [[25, -50, 2, 700], [75, 0, 2], [100, 102, -45, 22,]]

let b=max(a);
console.log(b);



