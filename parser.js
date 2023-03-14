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
}
getIcons();