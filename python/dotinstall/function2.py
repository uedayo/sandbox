# coding: UTF-8
# function
# 
# arg
# return
# pass

def hello(name, num = 3):
  print "hello! %s" % name * num

#hello("Tom", 2)
hello(num = 2, name ="Tom")

hello("Steve")

def hello2(name, num = 3):
  return "hello! %s" % name * num

s = hello(num = 2, name ="Tom")
print s

def hello3():
  pass # do nothing