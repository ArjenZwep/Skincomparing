from bs4 import BeautifulSoup
import pandas as pd
import requests
import csv

'''writer = csv.writer(a_file)
for skin in menu_list:
    for key, value in skin.items():
        writer.writerow([key, value])

a_file.close()'''

#get the http request and load it into beautifulsoup
req = requests.get("https://www.mobafire.com/league-of-legends/skins")
html = req.text
soup = BeautifulSoup(html, "lxml")
#with open("hetteam.html") as f:
    #soup = BeautifulSoup(f, "lxml")

#the scraper itself, 27 pages
menu_list = []
for i in range(27):
    req = requests.get(f"https://www.mobafire.com/league-of-legends/skins?page={i}")
    html = req.text
    soup = BeautifulSoup(html, "lxml")
    for i in range(46):
        menu = soup.select(f"#content > div > div.self-clear.mf-redesign > div:nth-child(2) > div > a:nth-child({i + 1})")
        img = soup.select(f'#content > div > div.self-clear.mf-redesign > div:nth-child(2) > div > a:nth-child({i + 1}) > img:nth-child(1)')
        skin = soup.select(f'#content > div > div.self-clear.mf-redesign > div:nth-child(2) > div > a:nth-child({i + 1}) > div.champ-skins__item__meta > h3')
        for menu_item in menu:
            item = skin[0]
            link = menu_item.get
            imgage = img[0]
            person ={
                "skin" : item,
                "link" : link,
                'img' : str(img[0]).replace('<img src="', '').replace('"/', '')
            }
            menu_list.append(person)
    print(f'Page{i} succesfully scraped')

#cleaning the data
for item in menu_list:
    item['img'] = item['img'][:-1]
    item['skin'] = str(item['skin']).replace('<h3>', '')
    item['skin'] = str(item['skin']).replace('</h3>', '')

''' Note: this is the image scraper, only activate when images are needed
for i in range:
for pic_url = 'https://www.mobafire.com/images/champion/skins/portrait/tristana-little-demon.jpg'
with open(f'pic{i}.jpg', 'wb') as handle:
        response = requests.get(pic_url, stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)'''


from app import db
db.create_all()
from app import Champion
from app import Skin

champion_test = Champion('Annie')
db.session.add(champion_test)
db.session.commit()

counter = 0
for item in menu_list:
    try:
        skin_test = Skin(item['skin'], item['img'], 1350, 1)
        db.session.add(skin_test)
        db.session.commit()
    

''' note: if you want the dict to a csv
a_file = open("champskin.csv", "w")
writer = csv.writer(a_file)
for skin in menu_list:
    for key, value in skin.items():
        writer.writerow([key, value])

a_file.close()'''