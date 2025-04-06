from django.shortcuts import render,get_object_or_404,redirect

from .models import Course

from .forms import CourseForm
# class Course:
#     id_of_obj=0
#     def __init__(self, title, instructor, duration, price):
#         Course.id_of_obj +=1
#         self.id = Course.id_of_obj
#         self.title = title
#         self.instructor = instructor
#         self.duration = duration  
#         self.price = price  

#     def __str__(self):
#         return f"{self.title} by {self.instructor} - {self.duration} hours - ${self.price}"
    

# # Create your views here.
# courses_list = [
#         Course("C++","Ahmed",10,200),
#         Course("C","Ali",10,200),
#         Course("Java","mohamed",10,200),
#         Course("Python","mahmod",10,200),
#         Course("C#","adm",10,200),
#         Course("HTML","Adel",10,200),
#         Course("CSS","Ahmed",10,200),
#         Course("Javascript","Ahmed",10,200),
#     ]

# def courses_view(request):

  

#     return render(request,"courses.html",{"courses":courses_list})





# def student_detail(request,id):
#     for stud in students_list:
#         if stud.id == id:

#           return render(request,"student_detail.html",{"student":stud})


# def student_delete(request,id):
#     for stud in students_list:
#         if stud.id == id:
#             students_list.remove(stud)
    
#     return students_view(request)
         


def courses_view(request):

    coureses = Course.objects.all()

    return render(request,"courses.html",{"courses":coureses})




def course_detail(request,id):
    coures= get_object_or_404(Course,id=id)

    return render(request,"coures_details.html",{"cors":coures})

def course_delete(request,id):
      
    
       coures= get_object_or_404(Course,id=id)
       coures.delete()
       return redirect("courses") 



def update_course(request,id):
       course= get_object_or_404(Course, id=id)
       if request.method == "POST":
            form = CourseForm(request.POST,instance=course)
            if form.is_valid():
                 form.save()
                 return redirect("courses")
            else:
                 print(form.errors)
       else:
            form = CourseForm(instance=course)
       return render(request,"update_course.html",{"form":form,"course":course})

def add_course(request):
    if request.method == "POST":
          form = CourseForm(request.POST)
          if form.is_valid():
                 form.save()
                 return redirect("courses")
    else:
            form = CourseForm()
    return render(request,"add_course.html",{"form":form})