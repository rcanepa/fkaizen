from django.db import models
from django.contrib.auth.models import User
from categories.models import Category


class Expense(models.Model):
    category = models.ForeignKey(Category)
    description = models.TextField()
    user = models.ForeignKey(User)
    total = models.DecimalField(max_digits=20, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.category.name + ' - ' + str(self.total)
