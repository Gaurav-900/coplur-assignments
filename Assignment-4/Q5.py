# 5) Write a Python program to create a dictionary by mapping two equal-length lists, one containing keys and the other containing values. keys = ["name", "age", "city"] and values = ["ABC", 25, "Jaipur"]

keys = ["name", "age", "city"]
values = ["ABC", 25, "Jaipur"]
l = len(keys)
d={}

for i in range(l):
    d[keys[i]] = values[i]

print(d)