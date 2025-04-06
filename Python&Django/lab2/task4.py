
def number_from_user():
    num=True
    while num:
        try:
            number = int(input("Enter an number: "))
            num = False
        except ValueError:
            print("Enter a number!")
    return number


def check_num_dividby(num):

    if num % 3 ==0 :
        if num % 5 == 0:
            return "FizzBuzz"
        return "Fizz"
    elif num % 5==0:
        if num % 3==0 :
            return "FizzBuzz"
        return "buzz"
    else:
        return "The number not divisible by 3 or 5"


print(check_num_dividby(number_from_user()))