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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_25_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXUW02N05UY1l6MnVGMjl1TW1TbFFSUGJseFZKaWNVVWRvaitndmhkNzdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMay1xTUFyY1E3dWVMUDAwbkhsUVpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5NDVjYzNjLWU0MjctNDRiNS05MWY0LTE1NDZiMGVhMjcyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA0MCxcbiAgICAgIDExNyxcbiAgICAgIDkxLFxuICAgICAgODUsXG4gICAgICAxOSxcbiAgICAgIDE1NCxcbiAgICAgIDE2NyxcbiAgICAgIDEwNSxcbiAgICAgIDIwMixcbiAgICAgIDk4LFxuICAgICAgOCxcbiAgICAgIDIwMyxcbiAgICAgIDE4MixcbiAgICAgIDYzLFxuICAgICAgODksXG4gICAgICA5NCxcbiAgICAgIDUxLFxuICAgICAgMTA1LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTAwLFxuICAgICAgMTEsXG4gICAgICA4OSxcbiAgICAgIDIwMCxcbiAgICAgIDIyNixcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgMTczLFxuICAgICAgNzAsXG4gICAgICAxMDEsXG4gICAgICAxNTUsXG4gICAgICAxMjAsXG4gICAgICA1NSxcbiAgICAgIDE2MSxcbiAgICAgIDEwOCxcbiAgICAgIDcyLFxuICAgICAgNzIsXG4gICAgICA3LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFCS1hXQTJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mzk5MjY3Njc6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMzAxMjQ1MjM1NjA5Njo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTh3cVVHRVBQbTdMY0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjh3Q3ZZdmlYZDRFeG1wbURjUTkvY1VEekpFUGgyai9rYm1DamdETW9ZZ3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUo0MUtCTG5Sd1lqZ0cvNyt0YzBxT3dmNzBKb3VkeG5uaGlCNWxYNkg1VlhNcTllYnJEejliMWtiYUR5QmMxTWVCUC9mSlBDOGxZWHVvbTg3SllsQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUlNcjVqOVpsUVJ1b0JXenFGR2pvOTB3dnFqUHBPcVNHQ0hyOVhRSy9TcFVMcjhsT2gvMExOTDlhWUo5bmhkU29YbHFJODBtNzlBWWtnaTE4TDJGaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzM5OTI2NzY3OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzczODc0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1WLmpzb24iOiAie1wia2V5RGF0YVwiOlwibFh1SG4yYXNZajBSL01QSVduZ1pYR09NZDJCVzdNcENLQkFOcnF1OE9SWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjg5Mjk2NTAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NjE2NjA1Mjc2XCJ9Igp9"  // PUT your SESSION_ID 


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
