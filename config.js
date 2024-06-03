const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94786597719";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNRamdGN3RZS2wrc1V0NFhBM0dQLy8zK1JBdURleFNFZlVwVGR0akZRY1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODY1OTc3MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGQTUzOThGRDU0NkE0NjFERENCM0FDOUEzOEJDOEY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQwMDE1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg2NTk3NzE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNDc4MzE2MUM4MDY2N0Y1RTI1RUE2RjJCOTk2MTgxNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0MDAxNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NjU5NzcxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTk5ODVDM0VDRjIwQTQ2MDlEOUIwNDFBQzk5NkI3RThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDAwMTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODY1OTc3MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyMDhBNjRDNUZCQkFFQkNFNDI3NEFDNzc4QUI4NEMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQwMDE1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPZU4tLW5hNVMyYTVrTHhjQVE1Ql9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwOWMyODJiLTI2ZjEtNDk3Ny1hZmYzLTMzNDBjZDk4MDZiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDYxLFxuICAgICAgMTQxLFxuICAgICAgNjcsXG4gICAgICAxMjUsXG4gICAgICAxNDAsXG4gICAgICAxOTcsXG4gICAgICA2MCxcbiAgICAgIDMsXG4gICAgICAxNTIsXG4gICAgICAxNyxcbiAgICAgIDE4MSxcbiAgICAgIDEwNixcbiAgICAgIDM0LFxuICAgICAgMTQyLFxuICAgICAgMjQ2LFxuICAgICAgNTYsXG4gICAgICAxODMsXG4gICAgICAxNSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA1LFxuICAgICAgNDUsXG4gICAgICAyNTQsXG4gICAgICAxNTYsXG4gICAgICAxNTMsXG4gICAgICA0NSxcbiAgICAgIDg0LFxuICAgICAgMTkzLFxuICAgICAgMjQ2LFxuICAgICAgMTk0LFxuICAgICAgMTk2LFxuICAgICAgMjUxLFxuICAgICAgODEsXG4gICAgICAyMTUsXG4gICAgICA3MSxcbiAgICAgIDE2MSxcbiAgICAgIDIzNixcbiAgICAgIDMxLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5LTVY5VEpFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NjU5NzcxOTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTE5OTA5NTQ2ODI4Mzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5OXVZb0RFTkhrOWJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibmE5Tms1Yzd2ZHpMUGcwM0g5NE5UME5TMWk0VWFwUS9idHhSTyszV3htaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6ZnlRSCtTVmRPU2FGMU5rZU1MUTByUUQ3ZUMwdEtpb1FxalhDaHJKQ3dhdTl5UTJxdkpWaWxYaUJlOVBlMGVSUndxNDhMamFuSkx1dlpHV0M2Z3lBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOdkJ1bm9CdytReGQ3ci9PSkdXSjlwVk9YdGRiOUtDeXhWa3ZiTld5L2FyL2ppbXYvYmp3T21NMUdWRFFLNjQ1MWo1c211TEN3MVFhZW1QZUFBMnRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NjU5NzcxOTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NDAwMTQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmNKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKY0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFL3VtcFI0MzNwRUtkMWZ0OXY3NVk1QS9OT1cwVitRbHRacEF2QjNKN2pRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyNzIxOTY0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NDAwMTQ5MDY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
