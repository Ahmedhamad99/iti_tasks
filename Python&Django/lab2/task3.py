
def take_start_length():
  num=1
  while num > 0:
    try:
      start = int(input("Enter starting number: "))
      length = int(input("Enter length: "))
      num-=1
    except ValueError:
       print("You must enter a number") 
   
    return (length,start)
  







def create_list(length,start):
     return  [num for num in range(start,length)]



print(create_list(*take_start_length()))
