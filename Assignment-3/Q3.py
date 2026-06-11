# 3) Write a program to check Palindrome Number For example Number 12321 is a Palindrome Number, because 12321 is equal to its reverse Number 12321. Steps for checking Palindrome number 1. Find reverse of the given number. 2. Compare that number with the reverse number. 3. If number and its reverse is equal then it is a Palindrome Number otherwise not.



v = str(input("Enter Value to check palindrome: "))

print(v)

reverse = v[-1::-1]

print(reverse)


if v == reverse:
    print(v + "is a Palindrome")
else:
    print(v + " It is not a Palindrome")

