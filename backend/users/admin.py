from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import BusinessUserCreationForm, BusinessUserChangeForm
from .models import BusinessUser


class BusinessUserAdmin(UserAdmin):
    add_form = BusinessUserCreationForm
    form = BusinessUserChangeForm
    model = BusinessUser
    list_display = ('email','username', 'is_staff', 'is_active',)
    list_filter = ('email','username', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','username', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(BusinessUser, BusinessUserAdmin)