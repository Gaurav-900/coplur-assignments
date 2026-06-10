# Q2) Input a number between 2 and 50 from user, and generate neet and clean table of that number. Your program should also prompt user if the number is not in range.

n = int(input("Choose a number between 2 and 50: "))

if n <2 or n > 50:
    print("Invalid Input")
else:
    print(f"Here is the table of {n}")


    for i in range(1, 11):
        m = i * n 
        print(f"{n} X {i} = {m}")


