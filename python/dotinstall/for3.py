# coding: UTF-8
# for / dictionary

a = {"taguchi":200, "fkoji":300, "dotinstall":400}

for k, v in a.iteritems():
  print "key: %s value: %d" % (k, v)

for k in a.iterkeys():
  print k

for v in a.itervalues():
  print v