def number_to_generate():
   
    try:
        numbers = int(input("Enter a number: "))
    except ValueError:
        print("You must Enter a number!")
    return numbers




def generate_table(numbr):
    conatiner= []
    for num in range(1,numbr+1):
        child = []
        for nu in range(1,num+1):
            child.append(nu*num)
        conatiner.append(child)
    return conatiner        

number = number_to_generate()

table = generate_table(number)

print(table)

        


