from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import BaseProfile
from .forms import UserForm

User = get_user_model()


class UserTestCase(TestCase):
    def setUp(self):
        u = User.objects.get_or_create(email="solo@example.com")

    def test_base_profile_created(self):
        u = User.objects.get(email="solo@example.com")

        self.assertIsNotNone(u.id)
        self.assertEqual(u.email, "solo@example.com")
        self.assertIsNotNone(u.profile)
        self.assertIsNotNone(u.profile.slug)

    def test_user_updated(self):
        u = User.objects.filter(email="solo@example.com")
        u.update(email="hansolo@example.com")

        u_object = User.objects.get(email="hansolo@example.com")
        self.assertEqual(u_object.email, "hansolo@example.com")

    def test_valid_user_form(self):
        u = User.objects.create(email="leia@example.com", name="Leia")
        data = {"name": u.name}
        form = UserForm(data=data)
        self.assertTrue(form.is_valid())
