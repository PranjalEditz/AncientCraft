import React from 'react';
import './Home.css';
import reactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect
  } from "react-router-dom";  

function Home() {
  return (
    <>
    <h1 className="bgm"></h1>
    <section className="piston-bg"></section>
    
    
    <img className="first-home-img" src="https://www.minecraft.net/content/dam/minecraft/pmp/about-minecraft/modes-minecraft-create.jpg" alt="" />
    <img className="arrowba" src="https://www.minecraft.net/content/dam/minecraft/pmp/pmp-minecraft-howitworks-survive.png" alt="" />
    <div className="logo-align">
    <h1 className="home-logo"><i>AncientCraft</i></h1>
    </div>
    <p className="info-web">Here on AncientCraft you can find some minecraft realted<br></br> things and tips which you also need to import.</p>
    <div className="box-1"><h1><span className="k">BUILD SOMETHING AMAZING</span></h1><p>Discover all the versatile ways<br></br> dust from the Redstone ore can be used<br></br> to enhance your creations, bring them to life, or give them some bang.</p></div><img className="pb" src="https://www.minecraft.net/content/dam/minecraft/pmp/pmp-minecraft-howitworks-buildsomething.png" alt="mc-img" />

    <div className="minecraft-servers"><h1><b>MINECRAFT SERVERS</b></h1><br></br>
    <p>CONNECT, COMPETE, AND CRAFT! JOIN MILLIONS OF OTHER<br></br> MINECRAFT PLAYERS ON PHONE, CONSOLE, OR WINDOWS 10<br></br> THANKS TO MASSIVE COMMUNITY SERVERS!</p></div>
    <img className="lop" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/servers/servers-hub-1.png" alt="" />
    
    <h1 className="chal"></h1>
   <h1 className="jkl"></h1>
   <h1 className="nikal"></h1>
   <h1 className="wah"></h1>
   <a href="https://app.appsflyer.com/id479516143?pid=minecraftnet&c=marketplace"><img className="app-store" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/marketplace/store-badges/app-store-en-us.svg" alt="" /></a>
   <a href="https://app.appsflyer.com/com.mojang.minecraftpe?pid=minecraftnet&c=marketplace"><img className="play-store" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/marketplace/store-badges/google-play-en-us.svg" alt="" /></a>
   <a href="https://www.oculus.com/experiences/rift/741306562635466/"><img className="oculus" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/marketplace/badge-oculus.svg" alt="" /></a>
    
   <a href="https://www.amazon.com/Mojang-Minecraft-Pocket-Edition/dp/B00992CF6W"><img className="amazon" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/marketplace/badge-amazon.svg" alt="" /></a>
   <a href="https://app.appsflyer.com/9nblggh2jhxj?pid=minecraftnet&c=marketplace"><img className="microsoft" src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/marketplace/store-badges/windows10-en-us.svg" alt="" /></a>
   <div className="about-section">
    <h1 className="about-logo">About Us</h1>
    <a href="/"><img className="logo-about" src="https://media.discordapp.net/attachments/880030841399549982/880313916054454352/unknown.png" alt="" /></a>
    <a href="/" className="about-h2">AncientCraft</a>
    <p className="about-2">AncientCraft is not associated with Minecraft. Minecraft is the official trademark of Mojang.<br></br>
    All prices are shown in USD and include VAT where applicable. &copy;</p>
    <p className="address">AncientCraft India UP - SE556999789201
Indirapuram 29, 411 4 Ghaziabad, India - support@AncientCraft</p>
    <p className="copyright">Copyright © 2021 – 2027 AncientCraft</p>
    <div classNmae="faq-parent">
      
    <h1 className="faq">FAQ'S</h1>
    <div className="ans">
    <a href="#" className="ans1">All about Enchantments.</a><br></br>
    <a href="#" className="ans2">All about Brewing.</a><br></br>
    <a href="/games" className="ans3"> All Mojang Games</a><br></br>
    <a href="#" className="ans4">How much we Earn ?</a><br></br>
    <a href="/minecraft-servers" className="ans5">Minecraft Servers.</a><br></br>
    <a href="/guide" className="ans6">Survival Guide.</a><br></br>
    <a href="/contact-us" className="ans7">Contact Us</a><br></br>
    <a href="https://www.minecraft.net/en-us/get-minecraft" className="ans8">Buy Minecraft.</a><br></br>
    </div>
      
    </div>
    <a title="Visit YouTube" href="https://www.youtube.com"><img className="youtube" src="https://media.discordapp.net/attachments/890124515051470898/890187500709113896/197b365922d1ea3aa1a932ff9bbda4a6.png?width=829&height=586" alt="" /></a>
    <a title="Visit Discord" href="https://www.discord.com"><img className="discord" src="https://media.discordapp.net/attachments/890124515051470898/890185198996688926/discord-mascot.png" alt="" /></a>
    <a title="Visit Twitter" href="https://www.twitter.com"><img className="twitter" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQuNzE3MiwxMiBDMTAuMzc3NiwxMiAxMy40NzM2LDcuMzgyODgxNjEgMTMuNDczNiwzLjM3ODkzNzMzIEMxMy40NzM2LDMuMjQ3Nzk2MDUgMTMuNDczNiwzLjExNzI0NTQ5IDEzLjQ2NDYsMi45ODcyODU2NiBDMTQuMDY2ODk4OCwyLjU1ODM2NTU1IDE0LjU4NjgxMzMsMi4wMjcyODM4NCAxNSwxLjQxODkwNjc4IEMxNC40MzgzMjc0LDEuNjYzOTQxMTggMTMuODQyNDk3NiwxLjgyNDYzNDY3IDEzLjIzMjQsMS44OTU2MjMwNyBDMTMuODc0ODQ2NCwxLjUxNjk1Njc4IDE0LjM1NTY3NDEsMC45MjEzODAzNjUgMTQuNTg1NCwwLjIxOTczMTk2NyBDMTMuOTgxMjk0NSwwLjU3MjY2NDY2IDEzLjMyMDM4NzcsMC44MjEzOTQwMTcgMTIuNjMxMiwwLjk1NTE4NjQ3IEMxMS42NzcyNDk3LC0wLjA0MzQ5OTE0NDcgMTAuMTYxNDMxNiwtMC4yODc5MzA5NiA4LjkzMzcyOTU2LDAuMzU4OTU0MzQ4IEM3LjcwNjAyNzUxLDEuMDA1ODM5NjYgNy4wNzE3NjQ5OSwyLjM4MzE2NDg2IDcuMzg2NiwzLjcxODYwNTA4IEM0LjkxMjEzNzQ0LDMuNTk2NDcyMSAyLjYwNjY4NTQ3LDIuNDQ1NzgwNDIgMS4wNDQsMC41NTI5MDE3MTggQzAuMjI3MTczNjU0LDEuOTM3MzU0NzggMC42NDQzOTI3MywzLjcwODQ3OTcyIDEuOTk2OCw0LjU5NzYwNjEyIEMxLjUwNzA0NDcyLDQuNTgzMzE1IDEuMDI3OTY3NjIsNC40NTMyNDAzNSAwLjYsNC4yMTgzNTk3IEwwLjYsNC4yNTY3NTY5MyBDMC42MDA0MDA4OCw1LjY5OTA3MDYyIDEuNjMzMDUwODksNi45NDEzMzQzMiAzLjA2OSw3LjIyNjkyOTgxIEMyLjYxNTkyMTc2LDcuMzQ4NTg0MDYgMi4xNDA1NDgzNSw3LjM2NjM2NzQzIDEuNjc5NCw3LjI3ODkxMzc0IEMyLjA4MjU2ODc2LDguNTEzMTkxMiAzLjIzNzk0NDc0LDkuMzU4NzM0MSA0LjU1NDYsOS4zODMwODE1NyBDMy40NjQ4NDEwMiwxMC4yMjYzMDM1IDIuMTE4NjM1NzEsMTAuNjg0MDU0OSAwLjczMjYsMTAuNjgyNjc5OSBDMC40ODc3NDIxNDEsMTAuNjgyMjE3MSAwLjI0MzEyMjQzOSwxMC42Njc2MjA4IDAsMTAuNjM4OTY2MSBDMS40MDczODE1NywxMS41MjgxNzI5IDMuMDQ0OTQ4MDQsMTEuOTk5ODMyOCA0LjcxNzIsMTEuOTk3NjM3MSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=" alt="" /></a>
    
    </div>
    </>
  );
}

export default Home;