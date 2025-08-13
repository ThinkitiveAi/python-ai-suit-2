"""
Main API v1 router that includes all endpoint routers.
"""
from fastapi import APIRouter
from api.v1.endpoints import provider, auth

router = APIRouter()

# Include provider endpoints
router.include_router(
    provider.router,
    prefix="/providers",
    tags=["providers"]
)

# Include authentication endpoints
router.include_router(
    auth.router,
    prefix="/auth",
    tags=["authentication"]
)
