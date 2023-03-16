/**
 *     _____                                v1.0
 *    / ___ \     v   v  u u  k k  k k  y y
 * \ | /| |\ | /   v v   u u  kk   kk    y
 *  \| \___/ |/     v    uuu  k k  k k   y
 *   |       |             backlink
 *   |_______|                         
 *     |   |          not for public use
 *                    (why would you???)
 */

// add some styling
const vukkyBacklinkStyle = document.createElement("style");
vukkyBacklinkStyle.innerHTML = `
@media (prefers-reduced-motion: no-preference) {
    @keyframes vb-rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes vb-scale {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.5);
        }
    }
    @keyframes vb-unscale {
        from {
            transform: scale(1.5);
        }
        to {
            transform: scale(1);
        }
    }
    @keyframes vb-superscale {
        from {
            transform: scale(1.5);
        }
        to {
            transform: scale(30);
        }
    }
    @keyframes vb-opacity {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
}
#vukkybacklinkwrap {
    animation: vb-rotate 15s infinite linear;
    width: fit-content;
    position: fixed;
    top: -5em;
    right: -3em;
    cursor: pointer;
}
.vukkybacklinkhover {
    animation: vb-scale 0.2s both ease-in;
}
.vukkybacklinkunhover {
    animation: vb-unscale 0.2s both ease-in;
}
.vukkybacklinksuperscale {
    animation: vb-superscale 0.5s forwards ease-in-out;
}
body.vukkybacklinkbye {
    animation: vb-opacity 0.5s forwards ease-in-out;
}
`
document.head.appendChild(vukkyBacklinkStyle);

// add the backlink
const vukkyBacklinkWrap = document.createElement("div");
vukkyBacklinkWrap.id = "vukkybacklinkwrap";
vukkyBacklinkWrap.innerHTML = `<img src="/assets/img/vukkyplanet.svg" id="vukkybacklinkplanet" onmouseover='vukkyBacklinkHandler(event)' onmouseout='vukkyBacklinkHandler(event)' onclick='vukkyBacklinkHandler(event)'>`;
document.body.appendChild(vukkyBacklinkWrap);

// handle events, EXTREMELY STUPIDLY TODO MAKE IT NOT BAD
// "you know full well you wont make that not bad ever" -Amy
// it is currently written like this to prevent extreme flashing when you move your mouse back and forth from the planet
// i hope the majority of users will hover over it *once* then either click or unhover
function vukkyBacklinkHandler(e) {
    if(e.target.classList.contains("vukkybacklinkwait")) {
        if(window.vukkyBacklinkTimeout) clearTimeout(window.vukkyBacklinkTimeout);
        window.vukkyBacklinkTimeout = setTimeout(() => {
            vukkyBacklinkHandler(e);
        }, 200);
        return;
    };
    if(window.vukkyBacklinkTimeout) clearTimeout(window.vukkyBacklinkTimeout);
    switch(e.type) {
        case "mouseover":
            e.target.classList.remove("vukkybacklinkunhover");
            e.target.classList.add("vukkybacklinkhover");
            e.target.classList.add("vukkybacklinkwait");
            setTimeout(() => {
                e.target.classList.remove("vukkybacklinkwait");
            }, 200);
            break;
        case "mouseout":
            e.target.classList.remove("vukkybacklinkhover");
            e.target.classList.add("vukkybacklinkunhover");
            e.target.classList.add("vukkybacklinkwait");
            setTimeout(() => {
                e.target.classList.remove("vukkybacklinkwait");
            }, 200);
            break;
        case "click":
            e.target.classList.add("vukkybacklinksuperscale");
            document.body.classList.add("vukkybacklinkbye");
            setTimeout(() => {
                document.location.href = "https://vukky.net/home"
            }, 500);
    }
}