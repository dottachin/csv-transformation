from rest_framework import viewsets
from .models import CSVFile, TransformationRule
from .serializers import CSVFileSerializer, TransformationRuleSerializer

class CSVFileViewSet(viewsets.ModelViewSet):
    queryset = CSVFile.objects.all()
    serializer_class = CSVFileSerializer

class TransformationRuleViewSet(viewsets.ModelViewSet):
    queryset = TransformationRule.objects.all()
    serializer_class = TransformationRuleSerializer
