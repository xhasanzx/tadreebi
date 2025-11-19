from backend.urls import urlpatterns
from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register_user, name="register"),
    path("login/", views.login_user, name="login"),
    path("<int:user_id>/", views.get_user_by_id, name="get_user_by_id"),
    path("get_all_users/", views.get_all_users, name="get_all_users"),
    path("update_user/", views.update_user, name="update_user"),
]
