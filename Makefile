.PHONY:up
up:
	docker compose up -d

.PHONY:down
down:
	docker compose down

.PHONY: app
app:
	docker exec -i -t tddbc bash
