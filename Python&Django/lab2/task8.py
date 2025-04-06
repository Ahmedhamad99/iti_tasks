def number_enterd():
    enter=""
    arr_num=[]
    while  enter !="done":
        try:
            enter = input("Enter a number or (done to exit): ").strip()
            
            if enter.lower() == "done":
                return arr_num
            arr_num.append(float(enter))
        except ValueError:
            print("the value you enterd is not valid")
    return arr_num

def get_average(arr):
    sum=0
    for num in arr:
       sum+=num
    try:
        average=sum/len(arr)
    except ZeroDivisionError:
        print("Zerro diviion srror")
    else:
       return f"the average of all number is ==> {average}"
    return "the function can not work effective"



print(get_average(number_enterd()))