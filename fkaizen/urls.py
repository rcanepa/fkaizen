from django.conf.urls import patterns, include, url
from django.contrib import admin
from categories.urls import router

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'api/', include(router.urls))
)
