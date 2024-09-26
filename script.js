// color variable
let bg_color="orange"
let dark_mode=true;
let color_map={"orange":["#323232","#505050","#464646"],"blue":["#323232","#505050","#464646"],"green":["#323232","#505050","#464646"],"purple":["#323232","#505050","#464646"]};
const color_map_fun=(bg_color)=>
{
    document.documentElement.style.setProperty("--main_bg",color_map[bg_color][0]); //rgb(225,225,240)
    document.documentElement.style.setProperty("--display_bg",color_map[bg_color][1]); //rgb(200,200,225)
    document.documentElement.style.setProperty("--button_bg",color_map[bg_color][2]);    
}
// COLOR MODE function
document.getElementById("color_options").addEventListener("change",function()
{
    bg_color=this.value;
    let image_element=document.querySelectorAll("#user_choice img");
    
    switch(bg_color)
    {
        case "orange":
            document.documentElement.style.setProperty("--header_bg","#ff6400");                                                //for header
            image_element.forEach(x=>{
                x.style.filter="invert(58%) sepia(16%) saturate(5312%) hue-rotate(342deg) brightness(104%) contrast(101%)";     //for option buttons
            });
            document.documentElement.style.setProperty("--text_color","#ffa500");                                               //for text
            color_map_fun(bg_color);
            break;
        case "blue":
            document.documentElement.style.setProperty("--header_bg","#3838E4");            //better
            image_element.forEach(x=>{
                x.style.filter="invert(55%) sepia(74%) saturate(5082%) hue-rotate(222deg) brightness(101%) contrast(101%)";
            });
            document.documentElement.style.setProperty("--text_color","#8181FF");
            color_map_fun(bg_color);
            break;
        case "green":
            document.documentElement.style.setProperty("--header_bg","#008000");
            image_element.forEach(x=>{
                x.style.filter="invert(54%) sepia(34%) saturate(746%) hue-rotate(71deg) brightness(96%) contrast(87%)";
            });
            document.documentElement.style.setProperty("--text_color","#4CA64C");
            color_map_fun(bg_color);
            break;
        case "purple":
            document.documentElement.style.setProperty("--header_bg","#800080");
                image_element.forEach(x=>{
                    x.style.filter="invert(64%) sepia(7%) saturate(4726%) hue-rotate(250deg) brightness(70%) contrast(88%)";
                });
            document.documentElement.style.setProperty("--text_color","#AD5AAD");
            color_map_fun(bg_color);
            break;
    }
});

// DARK MODE function
document.getElementById("bg_change").onclick=function()
{
    let image=document.getElementById("dark_mode")
    if(dark_mode)
    {   
        // dark mode
        color_map={"orange":["#323232","#505050","#464646"],"blue":["#323232","#505050","#464646"],"green":["#323232","#505050","#464646"],"purple":["#323232","#505050","#464646"]};
        
        document.documentElement.style.setProperty("--main_bg","#323232"); //rgb(50,50,50)
        document.documentElement.style.setProperty("--display_bg","#505050"); //rgb(80,80,80)
        document.documentElement.style.setProperty("--counter_color","#FFFFFF"); //rgb(255,255,255)
        document.documentElement.style.setProperty("--button_bg","#464646"); //rgb(70,70,70)
        
        image.src="./images/sun.png";
    }
    else
    {
        // light mode
        color_map={"orange":["#FFEDCC","#FFD27F","#FFD27F"],"blue":["#e1e1f0","#c8c8e1","#c8c8e1"],"green":["#DBEDDB","#A5D2A5","#A5D2A5"],"purple":["#E0C1E0","#CC99CC","#CC99CC"]};
        
        document.documentElement.style.setProperty("--main_bg",color_map[bg_color][0]); //rgb(225,225,240)
        document.documentElement.style.setProperty("--display_bg",color_map[bg_color][1]); //rgb(200,200,225)
        document.documentElement.style.setProperty("--counter_color","#000000"); //rgb(0,0,0)
        document.documentElement.style.setProperty("--button_bg",color_map[bg_color][2]); 
        
        image.src="./images/moon.png";
    }
    dark_mode=!dark_mode;
}

// ROCK_PAPER_SCICCSOR button functions
let user_cnt=0, computer_cnt=0,cnt=1;                                 // 0->rock ,1->paper, 2->scissor
let choices={0:"Rock",1:"Paper",2:"Scissor"};

document.querySelectorAll("#user_choice").forEach(button =>{                        
    button.onclick= function()
    {
        let computer_option= (Math.floor(Math.random()*100))%3;
        let x=parseInt(this.getAttribute("data"));
        let curr=`\t${cnt}.\t\tuser: ${choices[x]}\t\t\t\t\tComputer: ${choices[computer_option]}\n`;
        let process_tab_area=document.getElementById("process_tab");

        if(x==computer_option)  {document.getElementById("output").innerHTML="Draw";}
        else if((computer_option==0 && x==2) ||(computer_option==1 && x==0) ||(computer_option==2 && x==1))
        {
            computer_cnt+=1
            document.getElementById("computer").innerHTML=computer_cnt;
            document.getElementById("output").innerHTML="Computer won";
        }
        else
        {
            user_cnt+=1
            document.getElementById("user").innerHTML=user_cnt;
            document.getElementById("output").innerHTML="User won";
        }

        process_tab_area.innerHTML=curr+process_tab_area.innerHTML;
        cnt++;
    }
});

//RESET SCORE function 
document.getElementById("reset").onclick=function()
{
    user_cnt=0;computer_cnt=0;cnt=1;
    document.getElementById("computer").innerHTML=0;
    document.getElementById("user").innerHTML=0;
    document.getElementById("output").innerHTML="";
    document.getElementById("process_tab").innerHTML="";
}