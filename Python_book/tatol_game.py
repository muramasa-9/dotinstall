import random
import time

a = 0
b = 0
goal = 20

user = input ("aとbのどちらの亀が勝つか？")

print("競争開始")

while (a < goal and b < goal):
  print("---------")
  a = a + random.randint(1, 6)
  b = b + random.randint(1, 6)
  print("a" + ">" * a + "@")
  print("b" + ">" * b + "@")
  time.sleep(2)

if a == b:
  winner = "同時！"
elif a >b:
  winner= "a"
else:
  winner = "b"

if winner == user:
  print("正解です！")
else:
  print("残念！はずれー！")