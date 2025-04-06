
string_vowles = input("Enter your string: ").strip() 
count=0
for char in string_vowles:
    if char.lower() in ['a','o','e','u','i']:
        count+=1
print(f"the number of vowles is {count}")        
