
# print([i for i in range(10)])
# 後ろから読んで、rengeの0-9のリストから一つずつ取り出してiに入れて、そのままiを取り出す
# print([i * 3 for i in range(10)])
# 後ろから読んで、rengeの0-9のリストから一つずつ取り出してiに入れて、それに3をかけてを取り出す
# print([i * 3 for i in range(10) if i % 2 == 0])
# 後ろから読んで、rengeの0-9のリストから偶数（余り０）取り出してiに入れて、それに3をかけてを取り出す
# if i % 2 == 0 で偶数を表す

print(i * 3 for i in range(10) if i % 2 == 0) # print内で()は省略できる

# 集合型
print({i * 3 for i in range(10) if i % 2 == 0}) # 