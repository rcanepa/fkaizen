from django.conf.urls import patterns, include, url
from django.contrib import admin

from categories.urls import router as categories_router
from expenses.urls import router as expenses_router

urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(categories_router.urls)),
    url(r'^api/', include(expenses_router.urls)),
    url(r'^api/', include('authentication.urls')),
    url(r'^docs/', include('rest_framework_swagger.urls'))
)
