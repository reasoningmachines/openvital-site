.PHONY: help dev build check lint
help:
	@echo "dev: local preview; build: static assets; check: source validation; lint: static validation"
dev:
	npm run dev
build:
	npm run build
check:
	npm run check
lint:
	npm run lint
