from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver


class UserProfile(models.Model):
    GENRE_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female')
    ]
    user = models.OneToOneField(User, primary_key=True, related_name='profile')
    genre = models.CharField(max_length=1, choices=GENRE_CHOICES, default='M')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.user.username

    @receiver(post_save, sender=User)
    def create_profile_for_user(sender, instance=None, created=False, **kargs):
        if created:
            UserProfile.objects.get_or_create(user=instance)

    @receiver(pre_delete, sender=User)
    def delete_profile_for_user(sender, instance=None, **kargs):
        if instance:
            try:
                user_profile = UserProfile.objects.get(user=instance)
                user_profile.delete()
            except ObjectDoesNotExist:
                pass
