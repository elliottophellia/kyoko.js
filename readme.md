<p align="center">
<img src="https://i.ibb.co/ydWTXyD/kyoko.png" width="160"/><br/>
<b>歳納京子</b><br/>
Toshino Kyoko<br/>
<img src="https://img.shields.io/badge/NODE-JS-bf616a?style=flat-square"/> <img src="https://img.shields.io/badge/LICENE-MIT-ebcb8b?style=flat-square"/> <img src="https://img.shields.io/badge/VERSION-1.0.1-a3be8c?style=flat-square"/><br/>
A JavaScript Wrapper For KyokoAPI<br/>
<u><i>https://kyoko.rei.my.id</i></u>
<br/>
<br/>
Support Me!<br/>
<a href="https://paypal.me/elliottophellia">Paypal</a> - <a href="https://saweria.co/elliottophellia">Saweria</a> - <a href="https://trakteer.id/elliottophellia">Trakteer</a> - <a href="https://ko-fi.com/elliottophellia">Kofi</a>
<br/>
<br/>

# _Installation_
```
npm i kyoko.js
```
# _Usage_

## _Example_
```javascript
import { Kyoko } from 'kyoko.js';
const kyoko = new Kyoko();

// Sfw
kyoko.getWaifu(5)
.then(res => console.log(res))
.catch(err => console.log(err));
// Nsfw
kyoko.getNsfwWaifu(5)
.then(res => console.log(res))
.catch(err => console.log(err));
// Quotes
kyoko.getQuote(5)
.then(res => console.log(res))
.catch(err => console.log(err));
// MyAnimeList
kyoko.getMAL('Yuru Yuri')
.then(res => console.log(res))
.catch(err => console.log(err));
// Trace.moe
kyoko.getTrace('https://i.ibb.co/981SG4x/yuru-yuri.png')
.then(res => console.log(res))
.catch(err => console.log(err));
```

## _Endpoints_
```javascript
getWaifu()
getBlush()
getBonk()
getHug()
getKiss()
getQuote()
getSlap()
getSmile()
getSmug()
getWave()
getWink()
getAwoo()
getBite()
getBully()
getCry()
getCuddle()
getDance()
getGlomp()
getHandhold()
getHappy()
getHighfive()
getKick()
getKill()
getLick()
getMAL()
getTrace()
getNom()
getPat()
getPoke()
getNeko()
getRandomAnime()
getYeet()
getNsfwWaifu()
getNsfwTrap()
getNsfwBlowjob()
getNsfwNeko()
```