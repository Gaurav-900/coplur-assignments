v = str(input("Enter Value to check palindrome: "))

print(v)

reverse = v[-1::-1]

print(reverse)

if v == reverse:
    print(v + "is a Palindrome")
else:
    print(v + " It is not a Palindrome")

