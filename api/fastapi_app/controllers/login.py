from typing import Any
from fastapi import APIRouter

router = APIRouter()

@router.post("/login/access-token")
def login_access_token() -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests.
    """
    return {"access_token": "fake-token", "token_type": "bearer"}
