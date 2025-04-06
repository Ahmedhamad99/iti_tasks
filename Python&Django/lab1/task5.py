number = int(input("Enter your number: "))
for count in range(number+1):
    if count==0:
        continue
    else:
       print(" "*(number-count),"*"*count)
    