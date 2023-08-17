from django.db import models

class CSVFile(models.Model):
    file = models.FileField(upload_to='csv_files/')

class TransformationRule(models.Model):
    name = models.CharField(max_length=100)
    rule = models.TextField()