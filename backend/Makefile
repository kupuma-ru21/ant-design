# e.g: make table name="User"
table:
	go run -mod=mod entgo.io/ent/cmd/ent new $(name)

run:
	ENV=local go run ./main.go

gen:
	go generate .
