# 1) Write a python program that takes in a student name, class. It should also take in five subject marks of the students and find the total mark and percentage. Display a result in such away that their name, class, and percentage are printed.

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

print(f"Percentage = {total / 500 * 100:.2f}%")