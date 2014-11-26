from .settings import TIMEOUT_SESSION

"""
Provides a timeout for the user session
"""


class SessionTimeOutMiddleware():
    def process_request(self, request):
        request.session.set_expiry(TIMEOUT_SESSION)
        return None
