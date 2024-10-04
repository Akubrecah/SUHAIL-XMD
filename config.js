const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="akubrecah@akubrecah.onmicrosoft.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254739926767";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254739926767";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254739926767, 254719299900";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_22_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdUUW1rNFAydUl6N1ByTEF5aU5mckRkUFk1dit3Vm90TERZNm9QeStaYW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhxWWJLVmVOUlFLYTRCZlgtQTRZYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjUxZDhlMDItM2IzZC00YTM4LWI1MmMtNjE5M2NhNTI1NjczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDE5NixcbiAgICAgIDM4LFxuICAgICAgMjEwLFxuICAgICAgMjU0LFxuICAgICAgMjI5LFxuICAgICAgMTA5LFxuICAgICAgNSxcbiAgICAgIDEzOCxcbiAgICAgIDM4LFxuICAgICAgMTkzLFxuICAgICAgNTQsXG4gICAgICA5NyxcbiAgICAgIDk0LFxuICAgICAgMTAzLFxuICAgICAgNzAsXG4gICAgICAyNDAsXG4gICAgICAyLFxuICAgICAgMTYxLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDIzMSxcbiAgICAgIDM3LFxuICAgICAgMTE5LFxuICAgICAgMTQxLFxuICAgICAgMTc2LFxuICAgICAgNjAsXG4gICAgICA4MixcbiAgICAgIDI1LFxuICAgICAgODgsXG4gICAgICAyNTEsXG4gICAgICA0OSxcbiAgICAgIDE1NCxcbiAgICAgIDE1OCxcbiAgICAgIDIzNSxcbiAgICAgIDk0LFxuICAgICAgMjMwLFxuICAgICAgMTQzLFxuICAgICAgMTY4LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYyUEVOQ0ZOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mzk5MjY3Njc6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMzAxMjQ1MjM1NjA5Njo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTh3cVVHRUlDNWdiZ0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjh3Q3ZZdmlYZDRFeG1wbURjUTkvY1VEekpFUGgyai9rYm1DamdETW9ZZ3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielE2M1JRSXpUVEpMRTlabUN2bjQrLzRGVW9iL3hLYlA0RTZEa2xySWJHRVRlUlJ4OFFDWTBJMUtlMGhQVXNvb3RkdHFmL29pK1lySmNXdXpOVTU1QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHE3MGFVa1hobEFpK3pBQlZaLzZkUzk4byszbzB3dERqKzJVRDZXeTZOSDk4a3dXbW1jVE9BYWVLL1BRNVY2OGVod042S0dsOFdwRy8xS0REOXpraVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzM5OTI2NzY3OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODA3NjkzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZlJFNVJlS3dkNFk0NWduTlA1b0wyQ3FGeStDL1N2aTdEWlhBdjlaK0IwQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjg5Mjk2NTAyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzI3OTY2NTU2OTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
