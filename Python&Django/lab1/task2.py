iti_string = input("Enter string conatin : ").strip()

it = "itititi itiititi"

number_of_iti=0
# for count in range(len(it)-2):
#     if (it[count].lower()=='i') and (it[count+1].lower()=='t') and (it[count+2].lower()=='i'):
#       number_of_iti +=1
   
# print(number_of_iti)

for count in range(len(it)-2):
    if it[count:count+3]=="iti":
        number_of_iti+=1
print(number_of_iti)