from django.conf.urls import patterns, url

from .views import UserView, LoginView, LogoutView, \
    UserDestroyView, UserProfileRetrieveUpdateView

urlpatterns = patterns(
    '',

    url(r'^auth/login/$', LoginView.as_view(), name='login'),
    url(r'^auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^users/$', UserView.as_view(), name='user-list-create'),
    url(r'^users/(?P<pk>[0-9]+)/$', UserDestroyView.as_view(), name='user-destroy'),
    url(r'^users/(?P<user__username>[a-zA-Z0-9_@+-]+)$', UserProfileRetrieveUpdateView.as_view(), name='profile'),

    )
