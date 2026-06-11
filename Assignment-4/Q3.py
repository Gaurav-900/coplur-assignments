# 3) Write a check to see if a certain value exists within a list and print a message based on the result. Eg. Inventory: ["Laptop", "Mouse", "Monitor", "Keyboard"] Target: "Tablet"

inventory = ["Laptop", "Mouse", "Monitor", "Keyboard"]

if "Tablet" in inventory:
    print('Tablet exists in Inventory')
else:
    print('Tablet Does not exist in the inventory')