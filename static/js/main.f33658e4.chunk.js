(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{17:function(e,a,t){e.exports=t(29)},22:function(e,a,t){},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),i=t.n(c),s=t(3),r=(t(22),t(16)),o=(t(23),t(1)),m=function(e){var a=e.id,t=e.img,n=e.cardName,c=e.cardDescription;return l.a.createElement(s.b,{to:"/playlists/".concat(a)},l.a.createElement("div",{className:"card-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{loading:"lazy",src:t})),l.a.createElement("div",{className:"card-title"},l.a.createElement("h4",null,n),l.a.createElement("span",null,c)),l.a.createElement("div",{className:"card-play-button"},l.a.createElement("button",null,l.a.createElement("svg",{height:"16",role:"img",width:"16",viewBox:"0 0 24 24"},l.a.createElement("polygon",{points:"21.57 12 5.98 3 5.98 21 21.57 12",fill:"currentColor"})))))))},d=function(e){var a=e.id,t=e.name,n=e.subHeading,c=e.playlists.filter((function(e){return e.category===t}));return l.a.createElement("section",null,l.a.createElement("div",{className:"section-grid"},l.a.createElement("div",{className:"section-heading"},l.a.createElement(s.b,{to:"/category/".concat(a)},l.a.createElement("h2",null,t)),"Uniquely Yours"!==t?l.a.createElement("a",{href:"#"},"SEE ALL"):null,l.a.createElement("span",null,n)),c.map((function(e){return l.a.createElement(m,{key:e.id,id:e.id,cardName:e.playlist,cardDescription:e.description,img:e.img})}))))},u=[{id:"0",name:"Uniquely Yours"},{id:"1",name:"Mood",subHeading:"Playlist to match your mood"},{id:"2",name:"Focus",subHeading:"Music to help you concentrate"},{id:"3",name:"Popular New Releases"}],p=[{id:"1",category:"Uniquely Yours",playlist:"Liked Songs",img:"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"},{id:"2",category:"Focus",playlist:"Apply Yourself",description:"...and find your focus.",img:"https://i.scdn.co/image/ab67706f000000026bd6e35f13673c32626efdda"},{id:"3",category:"Focus",playlist:"The Office Stereo",description:"We have your workday soundtrack sorted.",img:"https://i.scdn.co/image/ab67706f0000000293a5248138a186c636ae1857"},{id:"4",category:"Focus",playlist:"Peaceful Piano",description:"Relax and indulge with beautiful piano music.",img:"https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"},{id:"5",category:"Focus",playlist:"Lo-Fi Beats",description:"Beats to relax and focus",img:"https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e"},{id:"6",category:"Focus",playlist:"Instrumental Study",description:"A soft musical backdrop for your studies",img:"https://i.scdn.co/image/ab67706f000000025ec8c003898b36c6f73dfac7"},{id:"7",category:"Focus",playlist:"Study Zone",description:"Soft pop ballads to help you focus",img:"https://i.scdn.co/image/ab67706f00000002761c38f269192822b4846126"},{id:"8",category:"Focus",playlist:"White Noise",description:"Welcome to the soothing hum of white noise",img:"https://i.scdn.co/image/ab67706f000000025654f5615b2aec45465d0fd2"},{id:"9",category:"Mood",playlist:"Morning Motivation",description:"Get your day off to a cracking start",img:"https://i.scdn.co/image/ab67706f00000002037da32de996d7c859b3b563"},{id:"10",category:"Mood",playlist:"Front Left",description:"The diverse sounds of now",img:"https://i.scdn.co/image/ab67706f00000002c222cce5c2a02a4ed8a707aa"},{id:"11",category:"Mood",playlist:"Mood Booster",description:"Get happy with this pick-me-up playlist.",img:"https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba"},{id:"12",category:"Mood",playlist:"Housework Hits",description:"Power through your chores with these songs.",img:"https://i.scdn.co/image/ab67706f00000002753bae6d854b1187b4b7943e"},{id:"13",category:"Mood",playlist:"Happy Pop",description:"Embrace these happy vibes with these feel-good tracks",img:"https://i.scdn.co/image/ab67706f00000002c34c4416ee6a7f0f89e4047a"},{id:"14",category:"Mood",playlist:"Even Flow",description:"A solid mix of favourites for anyone",img:"https://i.scdn.co/image/ab67706f000000024ec340c9f85abfeb4414e199"},{id:"15",category:"Mood",playlist:"Young Wild and Free",description:"This is how it's supposed to be",img:"https://i.scdn.co/image/ab67706f00000002e2c938563967c4f22c76ed74"},{id:"16",category:"Popular New Releases",playlist:"New Music Friday",description:"The best new songs of the week",img:"https://i.scdn.co/image/ab67706f0000000268b0c5d2f331653e29b38d0d"},{id:"17",category:"Popular New Releases",playlist:"how i'm feeling now",description:"Charlie XCX",img:"https://i.scdn.co/image/ab67616d0000b273664e38c99d077cc52ab48914"},{id:"18",category:"Popular New Releases",playlist:"High Off Life",description:"Future",img:"https://i.scdn.co/image/ab67616d0000b273935d8d5369bc55e74a39303e"},{id:"19",category:"Popular New Releases",playlist:"The GOAT",description:"Polo G",img:"https://i.scdn.co/image/ab67616d0000b273339f780dfdbc38558ea0761d"},{id:"20",category:"Popular New Releases",playlist:"99% Angel",description:"Theia",img:"https://i.scdn.co/image/ab67616d0000b2732c1dd1627c4e89357555e067"},{id:"21",category:"Popular New Releases",playlist:"Set my Heart on Fire",description:"Perfume Genius",img:"https://i.scdn.co/image/ab67616d0000b2739af34850f5125ef195d6101a"}],g=function(){return l.a.createElement("div",{className:"main-window"},l.a.createElement("div",{className:"main-grid"},u.map((function(e){return l.a.createElement(d,{key:e.id,id:e.id,name:e.name,subHeading:e.subHeading,playlists:p})}))))},h=l.a.createElement("svg",{viewBox:"0 0 512 512",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z",fill:"currentColor"})),E=l.a.createElement("path",{fill:"white",d:"M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"}),f=l.a.createElement("svg",{viewBox:"0 0 512 512",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z",fill:"currentColor"})),v=l.a.createElement("svg",{viewBox:"0 0 512 512",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor",fillRule:"evenodd"})),y=function(e){var a=e.toggleModal;return l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"logo"},l.a.createElement(s.b,{to:"/"},l.a.createElement("svg",{viewBox:"0 0 1134 340"},l.a.createElement("title",null,"Spotify"),E))),l.a.createElement("ul",{className:"nav-list"},l.a.createElement(s.b,{to:"/"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("div",{className:"nav-item-wrapper"},h,l.a.createElement("p",null,"Home")))),l.a.createElement(s.b,{to:"/genres"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("div",{className:"nav-item-wrapper"},v,l.a.createElement("p",null,"Search")))),l.a.createElement("li",{className:"nav-item",onClick:a},l.a.createElement("div",{className:"nav-item-wrapper"},f,l.a.createElement("p",null,"Your Library")))),l.a.createElement("div",{className:"cookies"},l.a.createElement("p",null,"Cookies"),l.a.createElement("hr",null),l.a.createElement("p",null,"Privacy")))},b=function(e){var a=e.toggleModal;return l.a.createElement("div",{className:"bottom-bar"},l.a.createElement("div",{className:"signup-banner"},l.a.createElement("div",{className:"signup-banner-text"},l.a.createElement("p",null,"PREVIEW OF SPOTIFY"),l.a.createElement("p",null,"Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.")),l.a.createElement("button",null,"SIGN UP FREE")),l.a.createElement("div",{className:"music-controls"},l.a.createElement("div",{className:"control-buttons"},l.a.createElement("div",{className:"control-button-wrapper"},l.a.createElement("i",{onClick:a,class:"fa fa-random"})),l.a.createElement("div",{className:"control-button-wrapper"},l.a.createElement("i",{onClick:a,class:"fa fa-step-backward"})),l.a.createElement("div",{className:"control-button-wrapper"},l.a.createElement("i",{onClick:a,class:"fa fa-play-circle"})),l.a.createElement("div",{className:"control-button-wrapper"},l.a.createElement("i",{onClick:a,class:"fa fa-step-forward"})),l.a.createElement("div",{className:"control-button-wrapper"},l.a.createElement("i",{onClick:a,class:"fa fa-redo"}))),l.a.createElement("div",{className:"progress-bar"},l.a.createElement("p",{onClick:a},"0.00"),l.a.createElement("hr",{onClick:a}),l.a.createElement("p",{onClick:a},"0.00"))))},w=function(){return l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"buttons"},l.a.createElement(s.b,{to:"/signup"},l.a.createElement("button",{href:"#"},"SIGN UP")),l.a.createElement("button",{className:"selected",href:"#"},"LOG IN")))},N=function(){return l.a.createElement("div",{className:"main-window"},l.a.createElement("div",{className:"search-categories-wrapper"},l.a.createElement("div",{className:"search-categories"},l.a.createElement("h2",null,"Browse all"),u.map((function(e){return l.a.createElement(s.b,{to:"/genres/".concat(e.id)},l.a.createElement("div",{className:"search-category"},l.a.createElement("div",{className:"search-category-content"},l.a.createElement("span",null,e.name))))})))))},k=function(){return l.a.createElement("div",{className:"signup-page"},l.a.createElement("header",null,E),l.a.createElement("form",{action:""}))},S=function(){var e=Object(o.f)().id,a=p.find((function(a){return a.id===e}));return l.a.createElement("div",{className:"main-window playlist-view"},l.a.createElement("div",{style:{backgroundColor:"rgb(37, 37, 39)"}},l.a.createElement("div",{className:"playlist-banner"},l.a.createElement("img",{src:a.img,alt:""}),l.a.createElement("div",{className:"playlist-banner-txt"},l.a.createElement("p",null,"PLAYLIST"),l.a.createElement("h1",null,a.playlist),l.a.createElement("h2",null,a.description),l.a.createElement("p",null,"Spotify")))),l.a.createElement("div",{className:"playlist-controls"},l.a.createElement("button",null,l.a.createElement("svg",{height:"28",role:"img",width:"28",viewBox:"0 0 24 24"},l.a.createElement("polygon",{points:"21.57 12 5.98 3 5.98 21 21.57 12",fill:"currentColor"}))),l.a.createElement("i",{class:"fas fa-heart"}),l.a.createElement("i",{class:"fas fa-ellipsis-h"})),l.a.createElement("div",{className:"playlist-list"},l.a.createElement("ul",null,[{id:"1",artist:"Artist1",song:"Song1",length:"4.20",playlistID:"9"},{id:"2",artist:"Artist2",song:"Song2",length:"4.20",playlistID:"9"},{id:"3",artist:"Artist3",song:"Song3",length:"4.20",playlistID:"9"},{id:"4",artist:"Artist4",song:"Song4",length:"4.20"},{id:"5",artist:"Artist5",song:"Song5",length:"4.20"},{id:"6",artist:"Artist6",song:"Song6",length:"4.20"},{id:"7",artist:"Artist7",song:"Song7",length:"4.20"},{id:"8",artist:"Artist8",song:"Song8",length:"4.20"},{id:"9",artist:"Artist9",song:"Song9",length:"4.20"},{id:"10",artist:"Artist10",song:"Song10",length:"4.20"},{id:"11",artist:"Artist11",song:"Song11",length:"4.20"}].map((function(e){return l.a.createElement("li",{key:e.id,className:"playlist-track"},l.a.createElement("i",{class:"fas fa-music"}),l.a.createElement("i",{class:"fas fa-play"}),l.a.createElement("div",{className:"playlist-track-song"},l.a.createElement("h3",null,e.song),l.a.createElement("p",null,e.artist)),l.a.createElement("span",null,e.length))})))))},M=function(e){var a=e.toggleModal,t=e.modal,n=e.handleModalClick;return l.a.createElement("div",{className:"modal-bg",onClick:n},l.a.createElement("div",{className:"modal",ref:t},l.a.createElement("div",null,l.a.createElement("h1",null,"Start listening with a free Spotify account"),l.a.createElement("ul",null,l.a.createElement("li",null,"No credit card, ever"),l.a.createElement("li",null,"Get unlimited podcasts"),l.a.createElement("li",null,"Play your favourite music, with ads")),l.a.createElement("span",{className:"close-modal",onClick:a},"CLOSE")),l.a.createElement("div",null,l.a.createElement("button",null,"sign up free"),l.a.createElement("hr",null),l.a.createElement("p",null,"Already have an account?"),l.a.createElement("button",null,"log in"))))},z=function(){var e=Object(o.f)().id,a=u.find((function(a){return a.id===e}));return l.a.createElement("div",{className:"genre-view main-window"},l.a.createElement(d,{id:a.id,name:a.name,subHeading:a.subHeading,playlists:p}))};var C=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],c=a[1],i=Object(n.useRef)(null),s=function(){c(!t)};return l.a.createElement("div",{className:"outer-wrap"},l.a.createElement("div",{className:"grid-container"},l.a.createElement(y,{toggleModal:s}),l.a.createElement(w,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/genres/:id",component:z}),l.a.createElement(o.a,{path:"/genres",component:N}),l.a.createElement(o.a,{path:"/playlists/:id",component:S}),l.a.createElement(o.a,{path:"/signup",component:k}),l.a.createElement(o.a,{path:"/",component:g})),l.a.createElement(b,{toggleModal:s}),t&&l.a.createElement(M,{toggleModal:s,modal:i,handleModalClick:function(e){i.current.contains(e.target)||c(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f33658e4.chunk.js.map