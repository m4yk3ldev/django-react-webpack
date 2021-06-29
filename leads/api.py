from rest_framework import viewsets, permissions

from .models import Lead
from .serializers import LeadSerializer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

    # def get_queryset(self):
    #     print(self.request)
    #     return self.request.lead.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)