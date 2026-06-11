# 6) Write a Python program to retrieve a specific value from a dictionary that is nested inside another dictionary. person = {"name": "ABC", "address": {"city": "Jaipur",

dict1 = {
    "name": "ABC", 
    "address": {"city": "Jaipur",}
}
for key, value in dict1.items():
    print(f"{key}: {value}")

print(dict1["address"]["city"])