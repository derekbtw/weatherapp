# Weather.app - also known as *Weather.exe*
***Ok, but what is it?***

**Weather** started as a little side project of mine. It's an app built in  [**Electron**](https://electronjs.org/), powered by  [**OpenWeatherMap**](https://openweathermap.org/).

![weatherapp prev](https://i.imgur.com/BFkue02.png)
## How to run it?
1. **First of all,** you have to supply your OpenWeatherMap api key *(you can find it [here](https://openweathermap.org/api))* and your city name to *index.html (lines 33, 34)* and *main.js (lines 73, 74)* - *the tutorial is [here](https://github.com/whoisroyal/weatherapp/blob/master/tutorial.md)*
 2. Then, run `npm install` in the project directory. 
2. Now, package **Weather** using `electron-packager . --icon assets/icon.png`
3. Run the *Weather.exe* or, if You are on Mac, *Weather.app*

**If You just want to preview it, just download the already built package [here](https://github.com/whoisroyal/weatherapp/tree/master/built)!**

## What can it do?
Currently not much. **Weather** lives in system tray waiting for you to open it.
It only displays current temperature, pressure, humidity, min - max temperature and wind speed.

## Key Shortcuts
**CTRL + R** - *Refresh view*

## Known bugs
* Weather not updating by itself
* Hardcoded api key and localization

## Can I fix the app?
**Sure!** Any bugfix is greatly appreciated!
## I love this app!
Happy to hear that :)
*If You want to help me, you can support me on [**PayPal**](https://www.paypal.me/kvpek)*

#
*thanks for reading ;P*
*~whoisroyal*
