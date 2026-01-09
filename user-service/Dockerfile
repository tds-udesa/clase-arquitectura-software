FROM python:3.11-slim
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /app

COPY pyproject.toml uv.lock .python-version ./

RUN uv sync --no-dev --frozen

COPY src ./src

EXPOSE 8000

CMD ["uv", "run", "python", "-m", "src.main"]
