async function getIcons() {
    const glob = require('glob');
    const fs = require('fs');
    const path = require('path');
    const icons = await glob('public/assets/icons/**/*.{png,gif}');
    const parsedIcons = [];
    icons.forEach(icon => {
        parsedIcons.push({"path":icon.split("public/")[1],"name":path.parse(icon).name,"pack":icon.split("public/")[1].split("/icons/")[1].split("/")[0]});
    });
    const folders = fs.readdirSync("public/assets/icons");

    fs.writeFileSync("public/assets/icons.json", JSON.stringify({"packs": folders, "icons": parsedIcons}))

    let AllCss = "";
    let packCss = {};
    parsedIcons.forEach(icon => {
        if (!packCss[icon.pack]) packCss[icon.pack] = ``;
        AllCss += `i.p8-${icon.pack}.p8-${icon.name} {content: url("https://cdn.jsdelivr.net/gh/vukkysoft/pixel8/public/${icon.path}");image-rendering: pixelated}`;
        packCss[icon.pack] += `i.p8-${icon.pack}.p8-${icon.name} {content: url("https://cdn.jsdelivr.net/gh/vukkysoft/pixel8/public/${icon.path}");image-rendering: pixelated;}`;
    })

    fs.writeFileSync("public/assets/css/all.css", AllCss)
    Object.keys(packCss).forEach(pack => {
        fs.writeFileSync(`public/assets/css/${pack}.css`, packCss[pack])
    })
}
getIcons();