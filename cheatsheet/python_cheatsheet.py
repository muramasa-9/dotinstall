



# 便利な数値の操作---------------------------------------

# 【(*args)】引数の数がわからなくても全て選択
def tasu(*args):
  r = 0
  for v in args: # args からひとつずつ値を代入
    r += v
  return r

print(tasu(1, 2)) # 3
print(tasu(1, 2, 3)) # 6
print(tasu(1, 2, 3, 4)) # 10




# 【リスト】---------------------------------------

# 足し算ができる str()とint()は混合不可
a = [0, 1, 2, 3]
b = [4]
c = a + b # c = [0,1,2,3,4]

# 末尾に追加 【リスト名.append(追加要素)】
a.append(4)

# 要素を削除 【del(リスト名[削除要素])】
del(a[2]) # リストの2番目を削除




# データの集計---------------------------------------
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



# リストの要素の並び替え---------------------------------------
a = [3, 7, 2, 9, 6]
sorted(a) # 小さい順（昇順）に並び替え
a.sort() # 小さい順（昇順）に並び替え
sorted(a, reverse = True) # 大きい順（降順）に並び替え

a_list = {"Orange": 300, "Banana": 200, "Apple": 500}
sorted(a_list) # 文字はアルファベット順で並び替え
# ['apple', 'Banana', 'Orange']


# タプルはリストの書き換えができない
a = (3, 7, 2, 9, 6) # リストを()で囲む


# クラスの設定---------------------------------------
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




# 例外処理---------------------------------------
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





# 【スライス】要素を変更できない---------------------------------------

from typing import Iterator

scores = [40, 50, 70, 90, 60]
print(scores[1:4]) # １番目から４番目の前まで
print(scores[:2])  # 始めから２番めの前まで
print(scores[3:])  # ３番めから最後まで
print(scores[-3:])  # 後ろから３番めまで　スタートは−１

s = 'hello' # 文字列でも使える
print(s[1:4])




# 【セット】 順番がなく重複がNGなデータ達---------------------------------------

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




# 【辞書型】 キーと値で管理---------------------------------------
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

# 【(**args)】で任意の数のキーワード引数を受け取る
def show_keyword(**args):
  for key, value in args.items(): # argsのキーと値を key, value に代入
    print(key + " = " + str(value))

show_keyword(a=55, b=48)
show_keyword(c=55, d=48, f=98)




# イテレーター 要素を順番に一つずつ選択---------------------------------------
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




# 【map(関数, イテレータ)】でイテレータの要素を加工---------------------------------------
def triple(n): # 3の倍数を表示
  return n * 3
print(list(map(triple, [1, 2, 3]))) # 表示 3 6 9


# 【lambda 引数: 処理】 ※上記を一行で表示
# lambda 引数 : 式
print(list(map(lambda n: n * 3, [1, 2, 3])))




# 【filter(関数, イテレータ)】でイテレータの要素を抽出---------------------------------------
def is_even(n): # 偶数を選択
  return n % 2 == 0 # 2で割って余りが0だったらTrue

print(list(filter(is_even, range(10)))) # 0~9までの幅で偶数を表示
# リストに変換しないと表示されない

# lambdaだと１行で表示できる
print(list(filter(lambda n: n % 2 == 0, range(10))))




# 【内包表記】リストやジェネレータの生成や加工---------------------------------------

# 例）0-9のリスト
print([i for i in range(10)])
# 後ろから読んで、rangeの0-9のリストから一つずつ取り出してiに入れて、そのままiを取り出す

print([i * 3 for i in range(10)])
# 後ろから読んで、rangeの0-9のリストから一つずつ取り出してiに入れて、それに3をかけてを取り出す

print([i * 3 for i in range(10) if i % 2 == 0])
# 後ろから読んで、rangeの0-9のリストから偶数（余り０）取り出してiに入れて、それに3をかけてを取り出す
# if i % 2 == 0 で偶数を表す

# ジェネレーター
print(i * 3 for i in range(10) if i % 2 == 0) # print内で()は省略できる

# 集合型
print({i * 3 for i in range(10) if i % 2 == 0}) # {}で囲む




# 【datetime】の使い方---------------------------------------
# 特定の日からオリンピックまでの日数を調べる関数を作る
import datetime
def calc_days(y, m, d):
  # タイムスタンプを得る
  olympic = datetime.datetime(2021, 7, 24).timestamp() #オリンピックの日のスタンプを得る
  target = datetime.datetime(y, m, d).timestamp()
  # timestamp()は1970年1月1日0時0分0秒からの経過時間を秒数で取得

  # ちなみに現在時刻から計算するには
  n = datetime.datetime.now().timestamp()

  # 何日なのか調べる
  perday = 60 * 60 * 24 # 一日を秒計算
  days = (olympic - target) // perday # オリンピックまでの秒数を日に計算
  # 計算結果を表示
  s = "{0}/{1}/{2}から{3}日後です。".format(y, m, d, int(days)) # 数字を埋め込み
  print(s)




# numpyの使い方 ベクトルや数値計算で使用---------------------------------------
import numpy as np # npにすることが多い
x = np.array([1, 2, 3]) # array([])でベクトルや行列を表示
print(x.shape) # .shape で形を確認。縦に3個、横に1個
print(x.ndim) # .ndim で次元数を確認

y = np.array([ #行列を表示 2次元
  [1, 2, 3], # 1行目
  [4, 5, 6], # 2行目
  [7, 8, 9] # 3行目
])
y.shape # .shape で形を確認。縦に３個、横に３個
y.mean() # yの全中身の平均値
y.mean(axis=1) # yの各横並びの平均値
y.var() # yのデータの分散
y.std() # yの標準偏差
y.max() # yの最大値
y.max(axis=1) # yの各横並びの最大値
np.zeros((10, 10)) # 中身が0の行10*列10の行列を作る
y.T # .Tで行と列を入れ替える
np.dot(x,y) # xとyの行列の掛け算




# pandasの使い方---------------------------------------
import pandas as pd
# シリーズ型 一列の配列
sr = pd.Series([1, 2, 3])

# データフレーム型 行列の配列
df = pd.DataFrame([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]])

# データファイルの読み込み
df = pd.read_csv('summary_result_report_20210102.csv') # ('') 内にファイルのpath
print(df)

df.head() # 読み込みファイルの先頭５行を呼び出し
df.tail() # 読み込みファイルの末尾５行を呼び出し
df[['項目1', '項目5']] # カラム名を指定して部分的に取り出し
df[['項目1', '項目5']].head() # 指定したカラムの先頭５行を取り出し
df.iloc[:,0:3] # .iloc[行,列] :はすべての意味, 指定スタート:指定の前で終わり
# 条件を満たすものをとりだす df[条件がtrue]
df[df['指定項目'] > 30] # def[指定項目が30を超えるもの]
df.sort_values(by='指定項目') # 指定項目を昇順で並び替え
df.shape # ファイルの(行数,列数)を確認できる
df.mean() # 各列（カラム）ごとの平均を確認
df.std() # 各列（カラム）ごとの標準偏差を確認
df.describe() # 各カラムの平均、標準偏差、最大値、最小値などを一括表示
df.values # numpyのarrayデータに変換




# matplotlibの使い方---------------------------------------





