from rest_framework.serializers import ModelSerializer
from .models import Expense


class ExpenseSerializer(ModelSerializer):
    class Meta:
        model = Expense
        read_only_fields = ('id', 'created_at', 'updated_at',)
