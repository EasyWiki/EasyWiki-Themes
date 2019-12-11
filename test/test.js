const testServerPath = "../easywiki-test";
const themes = "config";
const css = "css";

const fs = require("fs");
const path = require("path");

CopyInto(themes, path.join(testServerPath, "themes"));
CopyInto(css, path.join(testServerPath, "public", "css"));

async function CopyInto(srcFolder, destFolder)
{
    if(!fs.existsSync(srcFolder)) return;
    if(!fs.existsSync(destFolder)) fs.mkdirSync(destFolder);

    let files = fs.readdirSync(srcFolder);

    for(let i = 0; i < files.length; i++)
    {
        const file = files[i];
        const absPath = path.join(srcFolder, file);

        if(fs.statSync(absPath).isDirectory())
        {
            await CopyInto(absPath, path.join(destFolder,file.toLowerCase()));
        }
        else
        {
            fs.copyFileSync(absPath, path.join(destFolder,file.toLowerCase()));
        }
    }
}
