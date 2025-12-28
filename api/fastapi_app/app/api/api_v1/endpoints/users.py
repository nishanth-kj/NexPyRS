from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.api import deps
from app.models.user import User, UserRead, UserCreate

router = APIRouter()

@router.get("/", response_model=List[UserRead])
async def read_users(
    db: AsyncSession = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve users.
    """
    result = await db.execute(select(User).offset(skip).limit(limit))
    users = result.scalars().all()
    return users

@router.post("/", response_model=UserRead)
async def create_user(
    *,
    db: AsyncSession = Depends(deps.get_db),
    user_in: UserCreate,
) -> Any:
    """
    Create new user.
    """
    user = User.from_orm(user_in)
    # fake password hash
    user.hashed_password = user_in.password + "notreallyhashed"
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user
