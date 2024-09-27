//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237659535227";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5QVVZzQVFwaW0xS0JZVkZZN0E3bUczcGY1Z1ROVkt2ZENyaGdCU1Yxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDM2YlN1WFhPRzU2Y3dFNFhZTVU3YTlRVzJMMS9CbGNwK01HcExVWkxpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSnJsKzNFYTVET2sza3BCZkkxOFdaa0pONFZURDd2OUxYN0pTK2t6R0VrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmRXRoU2NoN3BrR3k3OGlLMEFEcEJWTFRTNGJkRkFrWWpobnlyTFBnbG5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDOUdXY0dVbURyOUE2S2JYaWIvaGYyL0E5Wis3MlVaWG1raUkvejE5RlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYydXFYQnR4VzloYjdJWmdRRnV3Vmx2em0xUkZQT0dNWUY5eXM0N1Y0eVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0sySE4xakNwaW5QL3pHeVMvR3VFMWxhN1dCWXJ5aXhKKzY5ejNVczdIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGRlVi82Tno1UHFPaW1vdzFjN0IzS3dTMGlzKzFmTUJkaEhqajZXYzBtcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd6R1p1VU45MkFmTWkxZ3ZLbzdobGRVamRZQjkvdVJRdmhpVlpRQVVlVFBOUm1TNXlxdEdGVEpjSlV4aTR6TXJHOUgzS0ZzcjdrNE5UV2ZRN1FLT0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IkhFeWtQZm04WVpuQkZOOXpUWS9OL1JodEpiV2VEZGtEM05wdkcva3V6WGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA4cEJhdGFhUWo2U2E1VjUwV2lCdFEiLCJwaG9uZUlkIjoiMzM4MzNlNTMtNGVmNC00YzJmLWE0NDUtZjczOTY4YTg5MmIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtTL3ZGTmtzdHdWcmw4WWJjeW1Pcm9tK21FUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSEdHRWhNUU9QWVA1dVVLNHlzTTRwT3M3M2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkdYRkdDTFYiLCJtZSI6eyJpZCI6IjIzNzY1OTUzNTIyNzo0NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdNMk1JT0VPNnEyN2NHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXZVd2RZL2ZVcmJ1UU94NGdRK08xSlcyaEhiYms3Q1RtRDJuUHFxdFlubz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidFZUV2d0ZVZsdWsrOHBkODhHbG1rc3Nqei81Qy9ielJReFI5ZUxuMnVmRk00dXU3OGJNV1BIR3IxV0Frd3JyTnpDdW9TQ2diT2pZMmJZWHFjbVNERGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImlRZXJ4Q3g2RWhCZjZXdy9hL1dBdC9hLzYyazdIa0sxQXU1M2xrcklLNTlIVUJhcElhaXVpUUlLb2VxU1Iwb2hNWnN4UlpkVjlUc2c2M3lDd2hyU0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU5NTM1MjI3OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFMMU1IV1AzMUsyN2tEc2VJRVBqdFNWdG9SMjI1T3drNWc5cHo2cXJXSjYifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQ1MjUzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQloifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
