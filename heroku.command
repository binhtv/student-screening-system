git subtree push --prefix client-app heroku-web master 
git subtree push --prefix server-app heroku master

heroku ps:scale web=1 --remote heroku
heroku ps:scale web=1 --remote heroku-web