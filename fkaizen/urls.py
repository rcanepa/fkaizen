from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic.base import TemplateView

from categories.urls import router as categories_router
from expenses.urls import router as expenses_router

urlpatterns = patterns(
    '',
    url(r'api/v1/auth/login/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(categories_router.urls)),
    url(r'^api/', include(expenses_router.urls)),
    url(r'^api/', include('authentication.urls')),
    url(r'^docs/', include('rest_framework_swagger.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^.*$', TemplateView.as_view(template_name='index.html'), name='index')
)
