/**
 * ppp   i  x   x  eeee  l      888
 * p  p  i   x x   e     l     8   8
 * pppp  i    x    eeee  l      888
 * p     i   x x   e     l     8   8
 * p     i  x   x  eeee  llll   888
 *                        .vukky.net
 */
async function p8() {
    const p8iconArray = await fetch("https://cdn.jsdelivr.net/gh/vukkysoft/pixel8/public/assets/icons.json").then(res => res.json());
    p8iconArray.packs.forEach(function (pack) {
        document.querySelectorAll(`i.p8-${pack}`).forEach(function (icon) {
            let iconName = icon.classList[1].split("p8-").pop()
            icon.innerHTML = `<img style="image-rendering: pixelated;" src="https://cdn.jsdelivr.net/gh/vukkysoft/pixel8/public/${p8iconArray.icons.find(icon => icon.name == iconName && icon.pack == pack).path}">`
        })
    })
}
p8();