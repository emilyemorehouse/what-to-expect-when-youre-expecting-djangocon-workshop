from django.views import generic


class HomePage(generic.TemplateView):
    template_name = "home.html"


class AboutPage(generic.TemplateView):
    template_name = "about.html"


class ContactPage(generic.TemplateView):
    template_name = "contact.html"

    def get_context_data(self, *args, **kwargs):
        context = super(ContactPage, self).get_context_data(*args, **kwargs)
        context["two_plus_two"] = 2 + 2
        return context
