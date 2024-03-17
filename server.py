# server.py



from flask import Flask, render_template, jsonify
import random
import random
app = Flask(__name__)
PORT = 8000


# class MyHandler(http.server.SimpleHTTPRequestHandler):
#     def do_GET(self):
#         if self.path == '/':
#             self.send_response(200)
#             self.send_header('Content-type', 'text/html')
#             self.end_headers()
#             with open('index.html', 'rb') as f:
#                 self.wfile.write(f.read())
#         elif self.path == '/random_idea':
#             idea = self.generate_idea()
#             self.send_response(200)
#             self.send_header('Content-type', 'text/plain')
#             self.end_headers()
#             self.wfile.write(idea.encode('utf-8'))
#

ideas = [
            "Рисунок облаков на небе",
            "Цветущее дерево весной",
            "Абстрактный узор",
            "Закат на океане",
            "Портрет вашего друга",
            "Фантастический пейзаж",
            "Рисунок звездного неба",
            "Морской пляж",
            "Автомобильная гонка",
            "Сказочный замок",
            "Пейзаж осеннего леса",
            "Путешествие в космос",
            "Волшебный сад",
            "Портрет вашего питомца",
            "Фруктовая корзина",
            "Горный пейзаж",
            "Рисунок вашего любимого места",
            "Абстрактная фигура",
            "Рисунок пиццы",
            "Летящие воздушные шары",
            "Пейзаж сельской местности",
            "Закат в горах",
            "Портрет вашего семьи",
            "Фантастический город",
            "Фламинго в болоте",
            "Рисунок вашего любимого фильма",
            "Рисунок вашей любимой книги",
            "Абстрактный фон",
            "Зимний пейзаж",
            "Пейзаж пустыни",
            "Портрет известной личности",
            "Водопад в лесу",
            "Рисунок вашего завтрака",
            "Рисунок вашего обеда",
            "Космический корабль",
            "Рисунок вашей мечты",
            "Рисунок вашего кошмара",
            "Рисунок вашего праздника",
            "Морская буря",
            "Пейзаж моста",
            "Рисунок вашей игры",
            "Портрет художника",
            "Абстрактный пейзаж",
            "Закат в долине",
            "Портрет певицы",
            "Магический лес",
            "Рисунок вашей фантазии",
            "Пейзаж вечернего города",
            "Лунная ночь",
            "Закат на поле"
        ]


@app.route('/')
def index():
    return render_template('../index.html')

@app.route('/random_idea')
def random_idea():
    # Выбираем случайную идею из списка
    idea = random.choice(ideas)
    # Возвращаем идею в формате JSON
    return jsonify({'idea': idea})

if __name__ == '__main__':
    app.run(debug=True)
