

def string_from_user():
        string = input("Enter your string: ").strip()
   
        return string


def reversing(st):
        return st[::-1]



def revesed_string(st):
    reve=""
    for s in st:
                reve = s + reve
    return reve

print(revesed_string(string_from_user()))

print(reversing(string_from_user()))