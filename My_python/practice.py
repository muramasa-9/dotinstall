def next_year(year):
  i = 4 - year % 4
  year2 = i + year
  s = '{0}年の次のオリンピックは{1}年です。'.format(year, year2)
  print(s)

next_year(2245)