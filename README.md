----------------------- YARGS -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/MQKY2OLQXZm7Z2Q0bQxSDJwSymQDfr

# Получаем контакт по id

node index.js --action get --id 6
https://monosnap.com/file/V95Wx7p9748gBye7J9foQROplzu3Ch

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/qZMxSVaLGtBhxBiZYYBnVY18KPKrbs

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/z3QLZOLpyE4ri9HTi1MVMjTJxtEmTX

----------------------- COMMANDER -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/4nhjUP9cdCGAifpC3umrZFfnbb5u5P

# Получаем контакт по id

node index.js --action get --id 3 -> Error.
node index.js --action get --id 2
https://monosnap.com/file/P8a5pGzX37IfTOiwMk5vOJrVNsce8p

# Добавялем контакт

node index.js --action add --name Mangoo --email mango@gmail.com --phone 322-22-11
https://monosnap.com/file/1FC4Hk5diuTuIIuo41CgTQXlpSVLRG

# Удаляем контакт

node index.js --action remove --id=47d48e4e-f407-4942-926b-0c512e891cb7
https://monosnap.com/file/9e5xTkj9zd5tT4l8IWj1qWvulxMQsT
