// // function poem()
// // {
// //     console.log("twinkle twinkle little star \n");
// //     console.log(" how you are wounder what do you yarr\n");
// //     console.log("up above far so high  like a daimond in the sky ");
    

// // }





 
// // poem();
// let num;
// function dice()
// {
//      num=Math.floor(Math.random()*6)+1;
//      document.getElementById("element").innerHTML=num;
   
// }

// // dice();
// console.log(num);



// <!-- AI genrated code----- -->



// function rollDice() {
//     const dice = document.getElementById('dice');
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     dice.textContent = randomNumber;
// }




// function printTable(num)
// {
//     let  i;
//     for(i=1;i<=10;i++)
//         console.log(`${num}*${i}=${num*i}`);
// }



// function getSum(num)
// {
//     let sum=0;
//     let i;
//     for(i=1;i<=num;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// let str=["hii","i "," am","rohit"];


// function concat(str)
// {
//     let result='';
//     for(let i=0;i<str.length;i++)
//     {
//         result+=str[i];
//     }
// return result;
// }




// let greet='hello';
// function outerfun()
// {
//     function innerfun()
//     {
//         console.log("Namaste");
//     }
//     console.log("namsate outer wala");
//     innerfun();
// }
// console.log(greet);
// outerfun();


//function expression  -----

// let greed=function()
// {
//     console.log("hello \n Namsate\n Good Morning");
// }


//higher order function 

function multiple(func,count)
{
for(let i=1;i<=count;i++)
{
    func();
}
}
function greed(){
    console.log("hello");
}
multiple(greed,10);




