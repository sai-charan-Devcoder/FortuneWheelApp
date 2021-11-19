(function() {
    const wheel=document.querySelector('.wheel');
    const startButton=document.querySelector('.button_img');
    const display=document.querySelector('.display');
    
    
    let deg=0;
    let size=45;

 const values = {
     1: "350",
     2: "110",
     3: "50",
     4: "310",
     5: "250",
     6: "10",
     7: "150",
     8: "210"
 }
 const win = (actualDeg) => {
     const win_val=Math.ceil(actualDeg/size);
    display.innerHTML= 'Your score is  ' +values[win_val];
 }

    
    startButton.addEventListener('click',()=>{
          

        display.innerHTML="-";

        //semi-hiding the button during the spin
        startButton.style.pointerEvents='none';

        //Math.random() will return value from o to 1
        deg=Math.floor(5000+Math.random()*5000);

        // ease-out is used to slow down the wheel at the end 
        //setting the transition for 10s
        wheel.style.transition='all 10s ease-out';

        //transform the wheel
        wheel.style.transform=`rotate(${deg}deg)`;
        
        //adding blur functionality
       wheel.classList.add('blur');

    });
    // adding event after transition end
    //we add the event that take the arguments of transistion end

    wheel.addEventListener('transitionend',()=>{
   
        
       wheel.classList.remove('blur');
        //activating button event again
        startButton.style.pointerEvents='auto';

        wheel.style.transition='none';
        
       const actualDeg=deg%360;
       
       wheel.style.transform=`rotate(${actualDeg}deg)`;
     //calculate and display the value
   win(actualDeg);

    });




   })();