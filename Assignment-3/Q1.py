# Q1) In your last program where you find the total and percentage of a student's marks of 5 subject, find the grade of the student using conditional statement. Eg. grade 'A' if percentage is greator than or equals to 60, 'B' for percentage is greator than or equals to 50 and less than 60, 'C' for percentage is greator than or equals to 40 and less than 50, 'D' for percentage is greator than or equals to 33 and less than 40, otherwise 'Fail' 

# Code From Previouse assignment

#Student Info

print("Taking Inputs--------")
print("\n")

name = input("Enter Name: ")
Class = input("Enter Class: ")

#Enter Subject Marks

Maths= int(input("Enter Maths Marks: "))
English= int(input("Enter English Marks: "))
Science= int(input("Enter Science Marks: "))
Social= int(input("Enter Social Marks: "))
Hindi= int(input("Enter Hindi Marks: "))

print("\n")
print("Displaying info---------")
print("\n")

print("Name: " + name + "\n" + "Class: " + Class)
print(f"Marks- \n Maths: {Maths} \n English: {English} \n Science: {Science} \n Social: {Social} \n Hindi: {Hindi}")

total = Maths + Science + English + Social + Hindi

Perc = total / 500 * 100
print(f"Percentage: {Perc:.2f}")

# Find Grade

if Perc >= 60:
    print("Grade A")
elif Perc >=50 and Perc < 60:
    print("grade B")
elif Perc >= 40 and Perc < 50:
    print("Grade C")
elif Perc >= 33 and Perc < 40:
    print("Grade C")
else:
    print("Failed")


