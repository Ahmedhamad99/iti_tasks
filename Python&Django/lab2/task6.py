
import re



def data_from_user():
    email_pattern = r'^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,}$'
    name=""
    email=""
    while not (name and email):
        try:
            name = str(input("Enter your name: ")).strip()
            if not name:
                print("Please enter your name!")
                name = str(input("Enter your name: ")).strip()
            email = str(input("Enter your email: ")).strip()
            
            if not re.match(email_pattern,email):
                print("You enter invalid email!")
                email=""
                email = str(input("Enter your email: ")).strip()
        except ValueError:
            print("the value you have enterd is not valid")
    return {"name":name,"email":email}


def print_user_data(data):
    for key,value in data.items():
        print(f"{key} is {value}")

user_data = data_from_user()


print_user_data(user_data)