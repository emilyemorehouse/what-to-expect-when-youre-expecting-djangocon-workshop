from django.test import TestCase
from django.contrib.auth import get_user_model
from ..models import BaseProfile
from ..forms import UserForm, ProfileForm

User = get_user_model()


class UserFormTestCase(TestCase):
    def test_valid_user_form(self):
        u = User.objects.create(email="leia@example.com", name="Leia")
        data = {"name": u.name}
        form = UserForm(data=data)
        self.assertTrue(form.is_valid())

    def test_valid_profile_form_1(self):
        data = {"bio": None}
        form = ProfileForm(data=data)
        self.assertTrue(form.is_valid())

    def test_valid_profile_form_2(self):
        data = {"bio": ""}
        form = ProfileForm(data=data)
        self.assertTrue(form.is_valid())

    def test_valid_profile_form_3(self):
        data = {"bio": "e" * 200}
        form = ProfileForm(data=data)
        self.assertTrue(form.is_valid())

    def test_invalid_profile_form(self):
        data = {"bio": "e" * 201}
        form = ProfileForm(data=data)
        self.assertFalse(form.is_valid())
