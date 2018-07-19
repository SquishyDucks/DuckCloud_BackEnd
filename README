# DuckCloud File Management System
### A web application by SquishyDucks
- Deployed Front-End: https://squishyducks.github.io/DuckCloud_FrontEnd/
- Deployed Back-End: https://serene-eyrie-91568.herokuapp.com/
- Front-End Repo: https://github.com/SquishyDucks/DuckCloud_FrontEnd
- Back-End Repo: https://github.com/SquishyDucks/DuckCloud_BackEnd

DuckCloud is a file management system allowing users to upload, store, and retrieve files. The application displays meta-data related to the files including title, creation date/time, and update date/time. Users can create, update, and delete files they own and download/view any file uploaded by any user.

DuckCloud makes use of HTML, CSS, Javascript, JQuery, Handlebars, Bootstrap, Node, and Express.

## Development Process

#### Planning

To plan our project, we began by creating a "To-Do" list of every step we
anticipated having to take to achieve a finished product. We broke down each
step as minutely as we could so as to help clarify what precisely needed to
be achieved at each stage. This was also helpful in determining at what points
we should commit, push, and deploy our code.

The To-Do list is available here:
https://docs.google.com/document/d/1b5cyE8ktW0przQeRlUCJxyn1mr2MOaJu1rVCXaip7R4/edit

#### Process

As we uncovered tasks we had not anticipated, we added these items to the
To-Do list. As we continued, we found it more useful to use the Github issue
queue to specify required changed as opposed to relying on the Google Doc.

As we completed each task we each volunteered to take on a subsequent one on
the list or in the issue queue. If a task involved code developed by more than
one of us, we would collaborate, usually no more than two to a task so we could
always be working on multiple problems at once.

At major successes, and every few hours (usually 3-4 times per day) we got
together and did a carefully-controlled merge to make sure our code meshed
together without breaking anything. When merge conflicts arose, one of the
coders most familiar with the merging code resolved the conflict and then
another reviewed and approved the merge.

#### Problem-Solving

Problem-solving involved:

- Using console logs and the debugger to isolate problems and determine solutions.
- Using our own Github issue queue to identify and isolate problems for all of us to investigate when convenient.
- Git commits after successful resolution of problems.
- When we were unable to solve a problem after collaboration and more than a
half hour of effort, we opened an issue in the General Assembly project queue.

#### ERDs



## Catalog of Routes

### User authentication
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`            | `users#signout`   |

---
#### POST /sign-up

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
echo
```

```sh
EMAIL=sample@email.com PASSWORD=sample sh scripts/heroku-auth/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user":
    {
      "__v":0,
      "updatedAt":"2018-07-19T13:52:57.455Z",
      "createdAt":"2018-07-19T13:52:57.455Z",
      "email":"sample@sample.com",
      "_id":"5b5097b98baf380014a2071d"
    }
}
```
---
#### POST /sign-in

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
echo
```

```sh
EMAIL=sample@email.com PASSWORD=sample sh scripts/heroku-auth/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user":
    {
      "token":"6f8a893e1ae1628645a87a9674b4d343",
      "_id":"5b5097b98baf380014a2071d",
      "updatedAt":"2018-07-19T13:53:06.016Z",
      "createdAt":"2018-07-19T13:52:57.455Z",
      "email":"sample@sample.com",
      "__v":0
    }
}
```
---
#### PATCH /change-password

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
echo
```

```sh
OLDPW='sample' NEWPW='elpmas' TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-auth/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
---
#### DELETE /sign-out

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
echo
```

```sh
TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-auth/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Uploads
| Verb   | URI Pattern              | Controller#Action   |
|--------|--------------------------|---------------------|
| GET    | `/uploads`               | `uploads#index`     |
| GET    | `/uploads/:id`           | `uploads#show`      |
| POST   | `/uploads`               | `uploads#create`    |
| PATCH  | `/uploads/:id`           | `uploads#update`    |
| DELETE | `/uploads/:id`           | `uploads#destroy`   |

All CRUD actions must include the header "Authorization: Bearer ${TOKEN}".

---
#### GET /items

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/uploads" \
--include \
--request GET \
--header "Authorization: Bearer ${TOKEN}"

echo
```

```sh
TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-uploads/index.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "uploads":
    [
      {
        "_id":"5b4f3dba307f850014b95d66",
        "updatedAt":"2018-07-18T13:16:42.256Z",
        "createdAt":"2018-07-18T13:16:42.256Z",
        "title":"shiba",
        "url":"https://duckcloud-production.s3.amazonaws.com/2018-07-18/a66469d1b9376d41915e1466eb5ebf48ff3cf220.jpg",
        "tags":"dog,
        "mimetype":"image/jpeg",
        "__v":0
      },
      {
        "_id":"5b4f628ef23c980014310eb6",
        "updatedAt":"2018-07-19T14:05:49.278Z",
        "createdAt":"2018-07-18T15:53:50.885Z",
        "title":"AnotherDuck",
        "owner":"5b4e728ccca8630014111de2",
        "url":"https://duckcloud-production.s3.amazonaws.com/2018-07-18/2e6ca543851960c4c1ca8b07f5c2e891113757bc.jpg",
        "tags":"Duck",
        "mimetype":"image/jpeg",
        "__v":0
      }
}
```
---
#### GET /items/:id

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/uploads/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
```

```sh
ID=5b4f628ef23c980014310eb6 TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-uploads/show.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "upload":
    {
      "_id":"5b4f628ef23c980014310eb6",
      "updatedAt":"2018-07-19T14:05:49.278Z",
      "createdAt":"2018-07-18T15:53:50.885Z",
      "title":"AnotherDuck",
      "owner":"5b4e728ccca8630014111de2",
      "url":"https://duckcloud-production.s3.amazonaws.com/2018-07-18/2e6ca543851960c4c1ca8b07f5c2e891113757bc.jpg",
      "tags":"Duck",
      "mimetype":"image/jpeg",
      "__v":0
    }
}

```
---
#### POST /items

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/uploads" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "upload": {
    "title": "'"${TITLE}"'",
    "url": "'"${URL}"'",
    "mimetype": "'"${MIMETYPE}"'",
    "extension": "'"${EXT}"'",
    "tags": "'"${TAGS}"'",
    "owner": "'"${OWNER}"'"
  }
}'

echo
```

```sh
TITLE=sample URL=https://duckcloud-production.s3.amazonaws.com/2018-07-18/2e6ca543851960c4c1ca8b07f5c2e891113757bc.jpg MIMETYPE=image/jpeg EXT=jpg TAGS=Duck OWNER=5b4e728ccca8630014111de2 TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-uploads/create.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "upload":
    {
      "_id":"5b4f628ef23c980014310eb6",
      "updatedAt":"2018-07-19T14:05:49.278Z",
      "createdAt":"2018-07-18T15:53:50.885Z",
      "title":"sample",
      "owner":"5b4e728ccca8630014111de2",
      "url":"https://duckcloud-production.s3.amazonaws.com/2018-07-18/2e6ca543851960c4c1ca8b07f5c2e891113757bc.jpg",
      "tags":"Duck",
      "mimetype":"image/jpeg",
      "__v":0
    }
}
```
---
#### PATCH /items/:id

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/uploads/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "upload": {
    "title": "'"${TITLE}"'",
    "url": "'"${URL}"'",
    "mimetype": "'"${MIMETYPE}"'",
    "extension": "'"${EXT}"'",
    "tags": "'"${TAGS}"'",
    "owner": "'"${OWNER}"'"
  }
}'
```

```sh
ID=5b4f628ef23c980014310eb6 TOKEN='6f8a893e1ae1628645a87a9674b4d343' TITLE='NewSample' sh scripts/heroku-uploads/update.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
---
#### DELETE /items/:id

Request:

```sh
curl "https://serene-eyrie-91568.herokuapp.com/uploads/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
echo

```

```sh
ID=5b4f628ef23c980014310eb6 TOKEN='6f8a893e1ae1628645a87a9674b4d343' sh scripts/heroku-uploads/delete.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
