// DARK MODE function
let bg_flag=true;
document.getElementById("bg_change").onclick=function()
{
    if(bg_flag)
    {   
        // dark mode
        document.documentElement.style.setProperty("--main_bg","#323232"); //rgb(50,50,50)
        document.documentElement.style.setProperty("--display_bg","#505050"); //rgb(80,80,80)
        document.documentElement.style.setProperty("--counter_color","#FFFFFF"); //rgb(255,255,255)
        document.documentElement.style.setProperty("--button_bg","#464646"); //rgb(70,70,70)
    }
    else
    {
        // light mode
        document.documentElement.style.setProperty("--main_bg","#FFFFFF"); 
        document.documentElement.style.setProperty("--display_bg","#FFFFFF");
        document.documentElement.style.setProperty("--counter_color","#000000"); //rgb(0,0,0)
        document.documentElement.style.setProperty("--button_bg","#FFFFFF"); 
    }
    bg_flag=!bg_flag;
}

// COLOR MODE function
// let color_flag=0;
// document.getElementById("color_options").click=function()
// {

// }


// ROCK_PAPER_SCICCSOR button functions
let user_cnt=0, computer_cnt=0;                                 // 0->rock ,1->paper, 2->scissor

document.querySelectorAll("#user_choice").forEach(button =>{                        
    button.onclick= function()
    {
        let computer_option= Math.floor(Math.random()*100)%3;
        let x=parseInt(this.getAttribute("data"));
        
        if(x==computer_option)
            {
                document.getElementById("output").innerHTML="draw";
            }
        else if((computer_option==0 && x==2) ||(computer_option==1 && x==0) ||(computer_option==2 && x==1))
        {
            computer_cnt+=1
            document.getElementById("computer").innerHTML=computer_cnt;
            document.getElementById("output").innerHTML="computer won";
        }
        else
        {
            user_cnt+=1
            document.getElementById("user").innerHTML=user_cnt;
            document.getElementById("output").innerHTML="user won";
        }
    }
});

//RESET SCORE function 
document.getElementById("reset").onclick=function()
{
    document.getElementById("computer").innerHTML=0;
    document.getElementById("user").innerHTML=0;
    document.getElementById("output").innerHTML="";
}