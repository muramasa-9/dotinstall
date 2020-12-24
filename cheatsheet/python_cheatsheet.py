



# 【リスト】

# 足し算ができる str()とint()は混合不可
a = [0, 1, 2, 3]
b = [4]
c = a + b # c = [0,1,2,3,4]

# 末尾に追加 【リスト名.append(追加要素)】
a.append(4)

# 要素を削除 【del(リスト名[削除要素])】
del(a[2]) # リストの2番目を削除




# クラスの設定
class Person: # クラス名
  def __init__(self, name, nationality, age): # def __init__(self):で初期化
    self.name = name
    self.nationality = nationality
    self.age = age

  def __call__(self): # def __call__(self):は特殊な呼び出し方法
    print('ここはcall関数です。')

  def say_hello(self, name):
    print('こんにちは、{}さん。私は{}です。'.format(name, self.name))

imanishi = Person('今西', '日本', 40 )
imanishi() # def __call__(self):の呼び出し方


class Saiyan(Person): # 親クラスを承継した子クラス
  def __init__(self, name, nationality, age, strength):
    super().__init__(name, nationality, age) # 親クラスの造成呼び出し
    self.strength = strength # 小クラスで属性追加

goku = Saiyan('悟空', '宇宙', 15, 100000)
goku.say_hello('今西')




# 例外処理
def menseki(base, height):
  return base*height
base = 10
height = '高さ'

try: # 計算エラーが出そうな要素をtryに入れる
  result = menseki(base, height)
  print('計算結果：{}' .format(result))

except Exception as e: # エラーすべて対応の書き方
  print('計算できません！') #エラーの時の処理

finally:
  print('必ず実行される処理があれば記入')





# 【スライス】要素を変更できない

from typing import Iterator

scores = [40, 50, 70, 90, 60]
print(scores[1:4]) # １番目から４番目の前まで
print(scores[:2])  # 始めから２番めの前まで
print(scores[3:])  # ３番めから最後まで
print(scores[-3:])  # 後ろから３番めまで　スタートは−１

s = 'hello' # 文字列でも使える
print(s[1:4])




# 【セット】 順番がなく重複がNGなデータ達

a = set([5, 4, 8, 5]) #2種類の書き方
a = {5, 4, 8, 5}     # 重複した5は表示されない

print(5 in a) # 5があるか表示

a.add(2) # 2を追加
a.remove(3) # 3を削除

print(len(a)) # 要素の数を表示


# 【セット】 集合演算ができる

b = {1, 3, 5, 8}
c = {3, 5, 8, 9}
print(b | c) # ｂとｃにある全要素
print(b & c) # ｂとｃ両方にある要素
print(b - c) # ｂの要素からｃの要素を引いた残り




# 【辞書型】 キーと値で管理
# キーを使って値を取り出す
sales = {'tomonari': 200, 'aiko': 400}

sales['tomonari'] = 300 # tomonariの値を300に変更
sales['koga'] = 500 # kogaの値500を追加
del(sales['aiko']) # aikoの値を削除
print(sales['tomonari']) # tomonariの値を呼びだし表示
print(sales.keys()) # 辞書名.keys() でキーの一覧を表示

print('tomonari' in sales) # KEY in DICT でキーの有無を確認できる

# items でキーと値を取り出す
sales = {'tomonari': 200, 'aiko': 400}

for key, value in sales.items():
  print('{0}: {1}' .format(key, value))




# イテレーター 要素を順番に一つずつ選択
scores = [40, 50, 70, 90, 60]
it = iter(scores)  # リスト(scores)をイテレーターに変換
print(next(it)) # scoresのひとつめ
print(next(it)) # scoresのふたつめ
print('hello')
print(next(it)) # scoresのみっつめ 途中に空いても継続


for score in scores: # リスト(scores)を自動でイテレーターに変換
  print(score) # イテレーターに変換しているので表示する


# イテレーターを作る
def get_infinite(): # ジェネレーターという関数
  i = 0
  while True:
    yield i * 2
    i += 1

g = get_infinite()
print(next(g)) # 0
print(next(g)) # 2
print(next(g)) # 4
print(next(g)) # 6




# 【map(関数, イテレータ)】でイテレータの要素を加工
def triple(n): # 3の倍数を表示
  return n * 3
print(list(map(triple, [1, 2, 3]))) # 表示 3 6 9


# 【lambda 引数: 処理】 ※上記を一行で表示
print(list(map(lambda n: n * 3, [1, 2, 3])))




# 【filter(関数, イテレータ)】でイテレータの要素を抽出
def is_even(n): # 偶数を選択
  return n % 2 == 0 # 2で割って余りが0だったらTrue

print(list(filter(is_even, range(10)))) # 0~9までの幅で偶数を表示
# リストに変換しないと表示されない

# lambdaだと１行で表示できる
print(list(filter(lambda n: n % 2 == 0, range(10))))




# 【内包表記】リストやジェネレータの生成や加工

# 例）0-9のリスト
print([i for i in range(10)])
# 後ろから読んで、rengeの0-9のリストから一つずつ取り出してiに入れて、そのままiを取り出す

print([i * 3 for i in range(10)])
# 後ろから読んで、rengeの0-9のリストから一つずつ取り出してiに入れて、それに3をかけてを取り出す

print([i * 3 for i in range(10) if i % 2 == 0])
# 後ろから読んで、rengeの0-9のリストから偶数（余り０）取り出してiに入れて、それに3をかけてを取り出す
# if i % 2 == 0 で偶数を表す

# ジェネレーター
print(i * 3 for i in range(10) if i % 2 == 0) # print内で()は省略できる

# 集合型
print({i * 3 for i in range(10) if i % 2 == 0}) # {}で囲む




# データの集計
# データの指定 """や'''で囲む
s = """
サンマ, マグロ, サンマ, サンマ, カツオ, フグ, サンマ, マグロ, サンマ, フグ, サンマ, マグロ, サンマ, カツオ, サンマ, マグロ, サンマ, ニシン, カツオ, イワシ, サンマ, サンマ, サンマ, マグロ, ニシン, サンマ, フグ, サンマ, カツオ
"""
s = s.strip() # データの空白をなくす

s_list = s.split(",") # , でデータを区切る

result = {} # 空の辞書型の変数を作る
for name in s_list: # 繰り返すたびにリストの要素をnameに代入
  name = name.strip() # 空白をなくす

  # nameの値（キー）がresultに存在するか確認
  if not name in result: # [KEY in DICT] と [not] で調べる
    result[name] = 0 # name をキーとして追加し、値を０とする

  # 辞書型の name のキーの値を１追加
  result[name] += 1

# 結果の表示
for name, v in result.items(): # items でキーと値を取り出す
  print(name + " = " + str(v))



  