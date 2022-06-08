----------------------- YARGS -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://monosnap.com/file/MQKY2OLQXZm7Z2Q0bQxSDJwSymQDfr)

# Получаем контакт по id

node index.js --action get --id 6
![get](https://monosnap.com/file/V95Wx7p9748gBye7J9foQROplzu3Ch)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![add](https://monosnap.com/file/qZMxSVaLGtBhxBiZYYBnVY18KPKrbs)

# Удаляем контакт

node index.js --action remove --id=3
![remove](https://monosnap.com/file/z3QLZOLpyE4ri9HTi1MVMjTJxtEmTX)

----------------------- COMMANDER -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://monosnap.com/file/4nhjUP9cdCGAifpC3umrZFfnbb5u5P)

# Получаем контакт по id

node index.js --action get --id 3 -> Error.
node index.js --action get --id 2
![get](https://monosnap.com/file/P8a5pGzX37IfTOiwMk5vOJrVNsce8p)

# Добавялем контакт

node index.js --action add --name Mangoo --email mango@gmail.com --phone 322-22-11
![add](https://monosnap.com/file/1FC4Hk5diuTuIIuo41CgTQXlpSVLRG)

# Удаляем контакт

node index.js --action remove --id=47d48e4e-f407-4942-926b-0c512e891cb7
![remove](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/fB1r2Tepca6Nw6JbfbV6x3rjLLGNbh/removeCom.jpg?Expires=1654716600&Signature=c05Vjvb-1Jj9CF4-Yma54mZyBX773s9Nfqxmh2JIb0K22kje~DOb~DyjUamM2nyovDUiS-GOHpEvArxBtv2x9XHh2fWjnR2nMizuRSXIJEHy1nOL3uEEQsEmj~U4Ut~grHXat~uM76PaXKcQOfvQ0XwSowKd-50TGj6C1iyv2pkb3J1PzOnyATIPJ-TrqfWD9K1yEKM1yWu9HwDK13-H1-agUsUEFOeUJujx1I4D6Ez-9O2cvlqN69YYNkCaM4WxUwVYIuogn7zNUdON52yjj~3OxC8FOc5hhJqG7FutUdO~wkQGHcqH7Pl51vkg8sZIYT6XYqBQiIpKET61-EhMjw__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)
