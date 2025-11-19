from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    user_type = models.CharField(
        max_length=20,
        choices=[
            ("student", "Student"),
            ("teacher", "Teacher"),
            ("admin", "Admin")
        ], default="student"
    )

    def __str__(self):
        return self.username


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="student_profile")
    grade = models.CharField(max_length=20)

    def __str__(self):
        return self.user.username


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="teacher_profile")
    salary = models.DecimalField(max_digits=6, decimal_places=0)
    department = models.CharField(max_length=20)

    def __str__(self):
        return self.user.username
