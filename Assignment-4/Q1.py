#  1) Create a list of at least 15 numbers and Calculate the total sum of all integers in a list and find the arithmetic mean (average). Also Identify the largest and smallest numerical values within a provided list. And Count Even and Odd Numbers 

lst = [32, 9, 22, 38, 1, 19, 31, 25, 14, 33, 10, 15, 34, 17, 4]

sum = 0

print("List: ", lst)


for l in lst:
    sum = sum + l
print(f"Sum of all Numbers in the list is: {sum}")



m = max(lst)
mi = min(lst)
print(f"Largest number in list: {m}")
print(f"Smallest number in list: {mi}")

e = 0
o = 0

for l in lst:
    if l % 2 == 0:
        e = e + 1
    else:
        o = o + 1
print(f"Number of Even Numbers in list are: {e}")
print(f"Number of Odd Numbers in list are: {o}")





