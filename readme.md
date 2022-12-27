<p align="center">
<img src="https://i.ibb.co/ydWTXyD/kyoko.png" width="160"/><br/>
<b>歳納京子</b><br/>
Toshino Kyoko<br/>
<img src="https://img.shields.io/badge/NODE-JS-bf616a?style=flat-square"/> <img src="https://img.shields.io/badge/LICENE-MIT-ebcb8b?style=flat-square"/> <img src="https://img.shields.io/badge/VERSION-1.0.0-a3be8c?style=flat-square"/><br/>
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

kyoko.getWaifu(5)
.then(res => console.log(res))
.catch(err => console.log(err));
  
```
## _Result_
```
{
  url: [
    'https://i.rei.my.id/ZV7J1WW.png',
    'https://i.rei.my.id/Jngw47s.png',
    'https://i.rei.my.id/MHrvoGY.jpg',
    'https://i.rei.my.id/KfZyMS3.jpg',
    'https://i.rei.my.id/xMRH74e.png'
  ]
}
```
## _Endpoints_
```javascript
getWaifu()
getNsfw()
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
```