string = input("Enter your string: ")

for char in string:
    if char.lower() in ['a','e','i','u','o']:
       string= string.replace(char,"")
print(string)