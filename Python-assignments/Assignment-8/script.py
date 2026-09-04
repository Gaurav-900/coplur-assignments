import csv
import tkinter as tk
import os
from tkinter import messagebox

def write_file():
    filename = enterfName.get()
    mode = entermode.get()
    if mode == "a" and not os.path.exists(filename):
        messagebox.showerror("Error", "File does not exist")
        return
    with open(filename, mode, newline="") as file:
        writer = csv.writer(file)

        if mode == "w":
            writer.writerow(["Name", "Mobile", "Email"])
        else:
            name = enterName.get()
            mobile = enternumb.get()
            email = enteradd.get()
            writer.writerow([name, mobile, email])

root = tk.Tk()
root.title("CSV GUI")
root.geometry("700x700")

label1 = tk.Label(root, text = "Enter File Name", font =('Ariel', 15))
label1.pack(pady="30")
enterfName = tk.Entry(root)
enterfName.pack()

label4 = tk.Label(root, text = "Choose mode, write: 'w', append: 'a'", font =('Ariel', 15))
label4.pack(pady="30")
entermode = tk.Entry(root)
entermode.pack()

label5 = tk.Label(root, text = 'To add data change mode to "a"', font =('Ariel', 15))
label5.pack(pady="30")

label2 = tk.Label(root, text = "Enter Name", font =('Ariel', 15))
label2.pack(pady="30")
enterName = tk.Entry(root)
enterName.pack()


label3 = tk.Label(root, text = "Enter number", font =('Ariel', 15))
label3.pack(pady="30")
enternumb = tk.Entry(root)
enternumb.pack()


label3 = tk.Label(root, text = "Enter address", font =('Ariel', 15))
label3.pack(pady="30")
enteradd = tk.Entry(root)
enteradd.pack()

tk.Button(root, text="Submit", command=write_file, bg="blue").pack(pady="10")


root.mainloop()

