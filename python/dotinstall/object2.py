# coding: UTF-8

# object

# class
# instance

class Person(object):
  def __init__(self, name):
    self.name = name
  def greet(self):
    print "my name is %s" % self.name

bob = Person("Bob")
tom = Person("Tom")

#print bob.name
bob.greet()
tom.greet()