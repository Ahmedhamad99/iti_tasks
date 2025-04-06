

def get_string_from_user():
    string = input("Entre tour string: ").strip()
    return string




def get_the_longest(string):
    smallest_string=string[0]
    arr_of_substring = []
    for index in range(1,len(string)):
        if string[index] >= string[index-1]:
            smallest_string+=string[index]
            
        else:
            arr_of_substring.append(smallest_string)   
            smallest_string=string[index]
    arr_of_substring.append(smallest_string)
    
    return arr_of_substring
result =  get_the_longest(get_string_from_user())


print(f"the longest substring is {max(result,key=len)}")

   
