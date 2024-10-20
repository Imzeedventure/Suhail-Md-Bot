const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_28_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpUW9OTDZiNm15RElIRWRrSis2MjdlWFpkdklDaEJHRFpJZFVIVTZkdXUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsS2YyM2pnQlFvS2RJdC1zM1FEX2R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5NTIzZTM3LWU3ZjMtNDg3Mi04NzhlLTRjYTg5M2Y0NTk5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDIwMCxcbiAgICAgIDExMixcbiAgICAgIDEyNCxcbiAgICAgIDExMixcbiAgICAgIDE5OCxcbiAgICAgIDMxLFxuICAgICAgMTA2LFxuICAgICAgODgsXG4gICAgICAxNjEsXG4gICAgICAyMyxcbiAgICAgIDE5NSxcbiAgICAgIDE4NyxcbiAgICAgIDY2LFxuICAgICAgMjI4LFxuICAgICAgMTk5LFxuICAgICAgMTc4LFxuICAgICAgMTM3LFxuICAgICAgNTYsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTE0LFxuICAgICAgMjM2LFxuICAgICAgMjQwLFxuICAgICAgMjM3LFxuICAgICAgMTQwLFxuICAgICAgNjEsXG4gICAgICAzMyxcbiAgICAgIDIwMixcbiAgICAgIDIwNSxcbiAgICAgIDk2LFxuICAgICAgMjcsXG4gICAgICAyNCxcbiAgICAgIDk2LFxuICAgICAgMTI5LFxuICAgICAgMTcyLFxuICAgICAgMjQxLFxuICAgICAgMTg5LFxuICAgICAgMTgzLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVQM01DRk5NXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDc3NTMyMjUzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJbXplZWQgdmVudHVyZVwiLFxuICAgIFwibGlkXCI6IFwiMjUzNzkwMTA0MDYwMDIxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdVdjZ3R0VPemswTGdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZnR1ZkV1VWErR3BUY1JXQzhwelF6azk1eXRteERKK1RUS1VFbFJyZFNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBhZWlPRFpGcUhxbFZDV1FVQmVsT0FsaU1VMExHMDlmTXJZRWxLaVB0OWhPcXVITkpLN2tvSnpwbG1ELytGMGNSdVZ4ZGRIZDhTamFuRFpHNmlUYkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtSamhhOTRMV1llcmpvNDBkV1JGb0J0N1pQS0RsUGV1VVVzL1N4QVRRWGh3UWJUNklBVlJ1Y0N1SnA5Wm9wS3hUbk5WUnU0M0pqY2J3SmNpMVdXNWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzc1MzIyNTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkzNzY4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVUZC5qc29uIjogIntcImtleURhdGFcIjpcImNNUWRUU2t0Uyt2RXVZTk0weXJnWUlpQjZjZGpUUGhMcUtCODhZcXVUQms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMzkyMjIyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5Mzc0OTU2MzI1XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
