i = 1
v = 0

while i <= 10:
  print(str(v) + "+" + str(i) + "=" + str(v + i))
  
  v = v + i
  i = i + 1
print("-----")
print("合計" + str(v))