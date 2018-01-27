let LRC = require('../dist/lrc.js')

let lyrics = LRC.parse(`
[ti:Faded]
[ar:Alan Walker]
[al:Faded]
[by:]
[offset:0]
[00:00.10]Faded - Alan Walker/Iselin Solheim
[00:00.20]Written by：Alan Walker/Jesper Borgen/Anders Froen/Gunnar Greve Pettersen
[00:00.30]
[00:11.16]You were the shadow to my light
[00:14.19]Did you feel us
[00:16.40]
[00:18.08]Another star
[00:20.01]You fade away
[00:21.89]Afraid our aim is out of sight
[00:25.00]Wanna see us
[00:26.81]
[00:28.68]Alive
[00:29.86]
[00:31.31]Where are you now
[00:33.87]
[00:36.58]Where are you now
[00:38.47]
[00:41.81]Where are you now
[00:44.56]Was it all in my fantasy
[00:46.81]
[00:47.37]Where are you now
[00:49.44]
[00:49.99]Were you only imaginary
[00:52.22]
[00:53.98]Where are you now
[00:55.85]
[00:57.37]Atlantis
[00:58.81]
[00:59.38]Under the sea
[01:01.08]
[01:02.10]Under the sea
[01:04.50]Where are you now
[01:06.47]
[01:07.32]Another dream
[01:09.43]
[01:10.67]The monster's running wild inside of me
[01:14.76]I'm faded
[01:16.35]
[01:19.97]I'm faded
[01:22.16]
[01:23.90]So lost I'm faded
[01:27.52]
[01:30.65]I'm faded
[01:33.88]
[01:34.62]So lost I'm faded
[01:38.09]These shallow waters never met
[01:40.96]What I needed
[01:42.88]
[01:44.65]I'm letting go
[01:45.81]
[01:46.51]A deeper dive
[01:48.56]Eternal silence of the sea
[01:51.29]
[01:51.87]I'm breathing
[01:53.50]
[01:55.38]Alive
[01:57.22]
[01:57.97]Where are you now
[01:59.69]
[02:03.21]Where are you now
[02:04.80]
[02:08.54]Under the bright
[02:09.98]But faded lights
[02:11.27]You set my heart on fire
[02:13.82]Where are you now
[02:16.49]Where are you now
[02:18.86]
[02:20.81]Another dream
[02:22.22]
[02:23.50]Another dream
[02:24.75]
[02:26.16]Another dream
[02:27.50]
[02:28.89]Another dream
[02:30.17]
[02:31.34]Where are you now
[02:33.12]
[02:34.70]Atlantis
[02:36.47]Under the sea
[02:38.44]
[02:39.38]Under the sea
[02:40.89]
[02:41.99]Where are you now
[02:43.77]
[02:44.67]Another dream
[02:46.55]
[02:47.99]The monster's running wild inside of me
[02:52.04]I'm faded
[02:53.81]
[02:57.17]I'm faded
[02:59.53]
[03:01.22]So lost I'm faded
[03:04.92]
[03:07.90]I'm faded
[03:11.15]
[03:11.96]So lost I'm faded
`)

console.log(lyrics)

console.log(lyrics.stringify(3))
console.log(lyrics.findIndex(12))
console.log(lyrics.previousLine(12))
console.log(lyrics.currentLine(12))
console.log(lyrics.nextLine(12))
