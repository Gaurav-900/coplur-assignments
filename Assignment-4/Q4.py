# 4) Delete every instance of a specific value from a list. List: [5, 20, 15, 20, 25, 50, 20] Item to remove: 20 

lst = [5, 20, 15, 20, 25, 50, 20]

print("List Before removing 20: ", lst)


lst.pop(1)
print("List After removing 1st 20: ", lst)
lst.pop(2)
print("List After removing 2nd 20: ", lst)
lst.pop(4)
print("List After removing 3rd/All 20: ", lst)