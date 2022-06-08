----------------------- YARGS -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/F40eCebnqe30pKEFZVEsbtli9TNxS9/list.jpg?Expires=1654716600&Signature=SJKyG0ntA25TmVtWSiagZHiPziQAgYLVto8ZHLTZArRb660WCjAgrWG-ilTB7-H4mXb7lA~YdYiMxE2pJB9VxYP-l-GPKCW30xtz--3EwWZicXDwdJ5FdrXc6sPFDmKxxa8K10rUdDOAXPeZlrtiD2onQcG4eKLIgXOjjWW3t0Abm10ickxUSm0Q5h80zQqqU5QrlyW5vdmslDrm4MLb1oP1YwPmaTxrfTudDPHkd7B6Wzd0-pIvbO116tj0CQz~PBT9ejovh5q-Y0Tl0xm7z5s77KAi6R-8r69gdCKZb6Z-D7SaefKIrO1IT4auQShq1OJwm4Uot-SV5CJPK6IgtQ__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Получаем контакт по id

node index.js --action get --id 6
![get](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/vd0N84TDE3osKAC3aOe67sd42Um66k/get.jpg?Expires=1654716600&Signature=EBqzmg8CDxLhTz8YclMCyqFNnSUvE-~B8p9YZUJtR17K5TFYNBB6oiL0yVVbrpYQwMxTDRWMXOQFKHQx~7eXSCMIG-Jfv53PX1FqMykadOKWrzAe5VIE~PcFUiQ6JBSQ7fqtc6WkzD5DB~5hxIi5VNMihYeuGAVySxysG6UakCV7zXmKqPTbhaU0jNv~kgVqm2YRdioWoIQ5q27De3OdhAkLAK7fFmZwtMltMUAb0ckMLuQaxmn1XcqKJIW~U2Pt5e4i13HIuErzEEiQQnyhVb~z51Zc-tNAoTh6KjdQLj9~LTYVHQQUI2K2lZLgPNpPo-pRLQahREUHXeyOeRSGdg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![add](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/kXD7g6AU0t1K2tszeTHsJOurMyFz5Q/add.jpg?Expires=1654716600&Signature=LVPr1baOqeYnArBSAYkEkONPyOhKL7GQJ4-x8T-HGvNk6y5QuRpLpdN3g-oECrEj5-DOC~UfwtMrHigKVfy5OJ6WblOT-U8b71OqmsjL5lCUsPfrmWpA3SjXPrbnUKNeZoj8BdhPXj~NSC4kvNOELUdoV6iEVWYRwJ3HaLl~Q68UZV3MXFbSj9RHQnev4PcwNeJ0Le0Z7i8e~dkBrqbpfp3a2lQ7BLzkR0ciD8JGKqsUg8BkUxtVnKQ-gwaRu5k4tYNZZBdf6q1lWJPi5iUffdQj9i2sAPSY4i8eCL9KVS~QLyicGT70pLOMLiJnBUAQC0OJ6DdoczY9ePnnfybETA__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Удаляем контакт

node index.js --action remove --id=3
![remove](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/yOWoxFrIwHc3mG8Snp7jp0OqiGFaZh/remove.jpg?Expires=1654716600&Signature=PZkn7wvm5a0dfgGyfXOaT3d-n9D55ZWSXqMwn~Rs~7D~sY7BQSj6R~-aYgHNY~a0GYq7U9D2h4LOSAM5MNjVeuX~jVnY-FIYHxy6qY2HC~Wy3BJX3OjaXhaN39SZhitc2xZIqu2XIBU51I7eplnKtyyJLKfBySptgiasrUkTUO6tXwpw9NmXwr3NAVCKEJD2yomaRfCPcu6N4Wbtq7skmMM0fXFG~ydcHm74QHf6Ql8fteBi9jWiYFCQH4NqwxD2XJkhujmsWjfQA9Pu2BqB9cfeZqvB1xQ947EvLpuCQiGbRc6ZyWnFUNdL0xzWwM1BmbIy1xmXJi8G0PP1cHA1Hw__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

----------------------- COMMANDER -----------------------

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/CvoQkCq67Z3wg0U7pV0s0rWOUhOPao/listCom.jpg?Expires=1654716600&Signature=N78mAbKqGx1SrixZZuG4K1lVlOYjEWpB8HYazMLMNOEicnOiHVI7AI~8oP8LFizZ19Y4ROxdVXwTbqZRkhH0bHoVvhq4uRG6iRmP-0~K-HMifC4eL29hPfA8SDFZXOd0NmgEJK~rOWHLE4JrZf8JJASeDEd6bVQ0ggc89XatQ-8ceUXClxY6BcSIJi-jd~8CgnUvxruh-XqeHzz-FGbUWw~QlRTFdhLJSlf1wDogID7GhR0pUJGmgm6MQvjafv~veHcVy5YgI4TKmXeXuZ5RhbZtmH0k5IbWa1Wqzx7Mvlf9k7Bs2kgYdn8WQsSeULuwsCJ9LzSw53xiODKH6rKRhA__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Получаем контакт по id

node index.js --action get --id 3 -> Error.
node index.js --action get --id 2
![get](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/1B4AwexzD32bB5VNfQc93qTtzmQaTx/getCom.jpg?Expires=1654716600&Signature=ALw-nodxg2uQnb5LiCPBkoseHx8yOZSd1Q1hGCS5iNmfPSlBObt6kjwLeehYXf~Fla6oyato6O7kBTJJ34F8NLvuSMV0WJ6kmFN-l2ptxYmjgOpRRP4b7VxFY7efJQxVF5kevrWTWqTbPtEo-6rxZ0cfg2K7kCP60vulNGjpMpKsmCU1zVWqSqwnE0qjoQ0mYW0opgRCYSyOuywwZDlydb-s39N96msDHz0U8pXu-ap9miwRApJ6qDIsRG6EVYsufRMJk-YlJRd8GF1M0xvnbP8Hz4GLu2S6EcOn1w9geTqcdmms1c7styVAxdqUf~ZT~18np4oU9BNqLKTkwC8jsw__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Добавялем контакт

node index.js --action add --name Mangoo --email mango@gmail.com --phone 322-22-11
![add](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/0gngMrnodqvm3WNfqOEco1g0Vt4tRh/addCom.jpg?Expires=1654716600&Signature=czAuJWYIcb4bBcUbEW7RqIuCvcbmpDz0V~mYBKRvAnvE~5BYKAF-fA8NGQ7un0BGsYPHDdR6noyG731bZagIlvYc1kmLww-lI6fI1Q6nnGdqmYn4JD5oGtj~fLOuzbZNsfp0b4ATa0KDOpHuTLPpLVye-Ekk8nLy7nL7gy598~sQiwobBid4ikWcaiRa3q8EN3uhiN0lMEcPHxLhIhssqnbU4k7rSND3uaKL8oThvqzA-qssrRWsgX7EIgOE6fbielNZiNxv0MIf5sdFyMUvbAIRFX~dHHTPAADAyk9f~0rTshlyTEAPP~X~RzFu74AnFxu2Wox~cc2y~PTS5At-Zg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

# Удаляем контакт

node index.js --action remove --id=47d48e4e-f407-4942-926b-0c512e891cb7
![remove](https://d1ro8r1rbfn3jf.cloudfront.net/ms_499020/fB1r2Tepca6Nw6JbfbV6x3rjLLGNbh/removeCom.jpg?Expires=1654716600&Signature=c05Vjvb-1Jj9CF4-Yma54mZyBX773s9Nfqxmh2JIb0K22kje~DOb~DyjUamM2nyovDUiS-GOHpEvArxBtv2x9XHh2fWjnR2nMizuRSXIJEHy1nOL3uEEQsEmj~U4Ut~grHXat~uM76PaXKcQOfvQ0XwSowKd-50TGj6C1iyv2pkb3J1PzOnyATIPJ-TrqfWD9K1yEKM1yWu9HwDK13-H1-agUsUEFOeUJujx1I4D6Ez-9O2cvlqN69YYNkCaM4WxUwVYIuogn7zNUdON52yjj~3OxC8FOc5hhJqG7FutUdO~wkQGHcqH7Pl51vkg8sZIYT6XYqBQiIpKET61-EhMjw__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)
