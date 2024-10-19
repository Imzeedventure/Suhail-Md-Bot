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

  sessionName:process.env.SESSION_ID || "SUHAIL_21_55_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImMxcXNCRFhUZ3Yvdm9VSGFMQi96Qmt1ZXFlekk1RFV2a0VhdzRNWFRZcm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkttUHdZbHMyUTF1LV8ya0s2dVlYa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjRmMTJkZWMtNjE1Ni00Nzg3LTljMzctODVjODcwMTRhNWI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgNzUsXG4gICAgICAyNDYsXG4gICAgICA1NixcbiAgICAgIDE5MSxcbiAgICAgIDEzMixcbiAgICAgIDEzNSxcbiAgICAgIDE4NSxcbiAgICAgIDExNSxcbiAgICAgIDg3LFxuICAgICAgMzAsXG4gICAgICAyMjMsXG4gICAgICAyOSxcbiAgICAgIDY2LFxuICAgICAgMTA2LFxuICAgICAgNjksXG4gICAgICA5MyxcbiAgICAgIDg5LFxuICAgICAgMjQ2LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTUzLFxuICAgICAgMjAyLFxuICAgICAgMjExLFxuICAgICAgMTAyLFxuICAgICAgMjE3LFxuICAgICAgMzIsXG4gICAgICA4MixcbiAgICAgIDEzOCxcbiAgICAgIDI0NSxcbiAgICAgIDE0MCxcbiAgICAgIDE4MCxcbiAgICAgIDYzLFxuICAgICAgMTgsXG4gICAgICAyMDUsXG4gICAgICA0NSxcbiAgICAgIDU5LFxuICAgICAgMTA3LFxuICAgICAgMixcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllYNVcyN1BZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDc3NTMyMjUzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJbXplZWQgdmVudHVyZVwiLFxuICAgIFwibGlkXCI6IFwiMjUzNzkwMTA0MDYwMDIxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdVdjZ3R0VPSFYwTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZnR1ZkV1VWErR3BUY1JXQzhwelF6azk1eXRteERKK1RUS1VFbFJyZFNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNBekdBb3BjdjVZcDZZWjhuaFN4MWw2RjZRanR3WGd1VVZuamo0emFKeGI4VTlLc3gvbkN1RnQydnJQS3hxK0I4VkcvTGg3blpPLzl1ak5KTnJmVUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi8wZ0RpczR1d0dTd0VWZGNWV0tzZWZoalcyeWE1QVdQRmdCK0hEd3ZrY2pVdnBxOUdOK2w2S1BrcUhuUnlwUVNnbTVLaG9HRXh4N0gwQzJZV1ZPYmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzc1MzIyNTM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkzNzQ5NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVUZC5qc29uIjogIntcImtleURhdGFcIjpcImNNUWRUU2t0Uyt2RXVZTk0weXJnWUlpQjZjZGpUUGhMcUtCODhZcXVUQms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMzkyMjIyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5Mzc0OTU2MzI1XCJ9Igp9",  // PUT SESSION ID HERE 
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
 
