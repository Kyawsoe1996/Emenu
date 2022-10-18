from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import BusinessUser


class BusinessUserCreationForm(UserCreationForm):

    class Meta:
        model = BusinessUser
        fields = ('email',)


class BusinessUserChangeForm(UserChangeForm):

    class Meta:
        model = BusinessUser
        fields = ('email',)