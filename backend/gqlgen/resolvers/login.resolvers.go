package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.63

import (
	"backend/ent"
	"backend/ent/user"
	"context"
	"errors"
)

// Login is the resolver for the login field.
func (r *mutationResolver) Login(ctx context.Context, input ent.CreateUserInput) (string, error) {
	u, err := r.client.User.Query().Where(user.UserName(input.UserName)).First(ctx)
	if err != nil {
		return "", err
	}
	if u.Password != input.Password {
		return "", errors.New("failed to login")
	}
	return u.ID.String(), nil
}
