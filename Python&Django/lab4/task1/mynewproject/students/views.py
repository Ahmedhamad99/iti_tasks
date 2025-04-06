
from django.shortcuts import render ,redirect

from django import forms
import csv
# Create your views here.

class Student:
    id_of_stud=0
    def __init__(self, name, age, data_birth, address,grade):
        Student.id_of_stud +=1
        self.id = Student.id_of_stud
        self.name = name
        self.age = age
        self.birth_date = data_birth  
        self.address = address
        self.grade = grade

    def __str__(self):
        return f"the student nmae is {self.name} and age is {self.age} and address {self.address}"
    
def add_to_file(student_list):
        
        with open("data_student.csv","w") as file:
            writ_to = csv.writer(file)
            writ_to.writerow(["ID", "Name", "Age", "Birth Date", "Address", "Grade"])
            for student in student_list:
                writ_to.writerow([student.id, student.name, student.age, student.birth_date, student.address, student.grade])
 
def get_from_file():
        students=[]
        with open("data_student.csv","r") as file:
            read_from = csv.DictReader(file)
            for row in read_from:
                    students.append(Student(row["Name"], int(row["Age"]), row["Birth Date"], row["Address"], int(row["Grade"])))
        return students















students = [
       Student("ali",20,"20/20/2000","25 giza",90),
       Student("ahmed",20,"20/20/2000","25 monofia",90),
       Student("adel",20,"20/20/2002","25 naser",100),
       Student("mostafa",20,"20/20/2002","25 sadat",80),
       Student("mohamed",20,"20/20/2003","25 tanta",80),
       Student("Mahmoud",20,"20/20/2000","25 sinai",100),
       Student("adm",20,"20/20/2000","25 giza",90),
    ]

add_to_file(students)



def students_view(request): 
   
    students_list = get_from_file()
    return render(request,"students.html",{"students": students_list})


students_list= get_from_file()

def student_detail(request,id):
    for stud in students_list:
        if stud.id == id:

          return render(request,"student_detail.html",{"student":stud})


def student_delete(request,id):
    for stud in students_list:
        if stud.id == id:
            students_list.remove(stud)
    
    return students_view(request)
         



class Studentforms(forms.Form):
     name=forms.CharField(max_length=100)
     age=forms.IntegerField()
     birth_date= forms.CharField()
     address=forms.CharField(max_length=100)
     grade=forms.IntegerField()
     courses = forms.CharField()





def add_student(request):
    if request.method == "POST":
        form = Studentforms(request.POST)
        if form.is_valid():
            new_student = Student(
                form.cleaned_data["name"],
                form.cleaned_data["age"],
                form.cleaned_data["birth_date"],
                form.cleaned_data["address"],
                form.cleaned_data["grade"]
            )

            students_list.append(new_student) 

            with open("data_student.csv", "a", newline="") as file: 
                writer = csv.writer(file)
                writer.writerow([new_student.id, new_student.name, new_student.age, new_student.birth_date, new_student.address, new_student.grade])

            return redirect("students") 
    else:
        form = Studentforms()
    
    return render(request, "add_student.html", {"form": form})