
def number_from_user():
   num= 5
   lis_of_numbers= []
   while num>0:
      try:
        numbers = int(input("Enter a number: "))
        num-=1
        lis_of_numbers.append(numbers)
      except ValueError:
        print("You must Enter a number!")
   return lis_of_numbers



        
         
        



def sorting_Func(numbrs):
  
  for index in range(len(numbrs)):
    for num in range(len(numbrs)-index-1):
      if numbrs[num] > numbrs[num+1]:
        numbrs[num],numbrs[num+1] = numbrs[num+1],numbrs[num]
  return numbrs   


numbsr = number_from_user()

sorting_list = sorting_Func(numbsr)
print(sorting_list)