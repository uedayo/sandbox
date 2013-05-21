# coding: UTF-8
# for
# continue
# break

sum = 0
for i in range(10):
  if i == 3:
    continue
  print i
else:
  print "end"

sum = 0
for i in range(10):
  if i == 3:
    break
  print i
else:
  print "end"