from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CSVFileViewSet, TransformationRuleViewSet

router = DefaultRouter()
router.register(r'csv-files', CSVFileViewSet)
router.register(r'transformation-rules', TransformationRuleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
