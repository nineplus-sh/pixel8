async function getIcons() {
    const glob = require('glob');
    const fs = require('fs');
    const path = require('path');
    const icons = await glob('public/assets/icons/**/*.{png,gif}');
    const parsedIcons = [];
    icons.forEach(icon => {
        parsedIcons.push({"path":icon.split("public/")[1],"name":path.parse(icon).name});
    });

    fs.writeFileSync("public/assets/icons.json", JSON.stringify(parsedIcons))
}
getIcons();