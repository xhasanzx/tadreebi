from .models import User, Student, Teacher
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login

# Create your views here.
def register_user(request):
    if request.method == "POST":
        try:
            username = request.POST["username"]
            if User.filter(username=username):
                return Response({
                    "msg":"Username already exists"},
                    status=status.HTTP_400_BAD_REQUEST)
            if request.POST["password"]:
                password = request.POST["password"]
            if request.POST["user_type"]:
                user_type = request.POST["user_type"]
            user = User.objects.create_user(username=username, password=password)
            user.user_type = user_type
            user.save()
            
            if user_type == "student":
                if request.POST["grade"]:
                    grade = request.POST["grade"]
                student = Student.objects.create(user=user, grade=grade)        
                student.save()
                
            elif user_type == "teacher":
                if request.POST["salary"]:
                    salary = request.POST["salary"]
                if request.POST["department"]:
                    department = request.POST["department"]
                teacher = Teacher.objects.create(user=user, salary=salary, department=department)
                teacher.save()
        except Exception as e:
            return Response({
                "msg":f"error: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response({
        "msg":"User registered successfully"},
        status=status.HTTP_200_OK)
    
def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({
                "msg":"Login successful"},
                status=status.HTTP_200_OK)
        else:
            return Response({
                "msg":"Invalid username or password"},
                status=status.HTTP_401_UNAUTHORIZED)

def get_user_by_id(request, user_id):
    if request.method == "GET":        
        user = User.objects.get(id=user_id)
        return Response({
            "user":user},
            status=status.HTTP_200_OK)
    else:
        return Response({
            "msg":"Invalid request method"},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)
        
def get_all_users(request):
    if request.method == "GET":
        users = User.objects.all()
        return Response({
            "users":users},
            status=status.HTTP_200_OK)
    else:
        return Response({
            "msg":"Invalid request method"},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)
        
def update_user(request):
    if request.method == "PUT":
        user_id = request.PUT["user_id"]
        user = User.objects.get(id=user_id)
        user_type = user.user_type
        if request.PUT["username"]:
            user.username = request.PUT["username"]
        if request.PUT["password"]:
            user.password = request.PUT["password"]
        if request.PUT["email"]:
            user.email = request.PUT["email"]
        if request.PUT["first_name"]:
            user.first_name = request.PUT["first_name"]
            user.save()
        if request.PUT["last_name"]:
            user.last_name = request.PUT["last_name"]
            user.save()        
        user.save()    
        
        if user_type == "student":
            student = Student.objects.get(user=user)
            if request.PUT["grade"]:
                student.grade = request.PUT["grade"]
            student.save()
        
        elif user_type == "teacher":
            teacher = Teacher.objects.get(user=user)
            if request.PUT["salary"]:
                teacher.salary = request.PUT["salary"]
            if request.PUT["department"]:
                teacher.department = request.PUT["department"]
            teacher.save()
        return Response({
            "msg":"User updated successfully"},
            status=status.HTTP_200_OK)
