#!/bin/bash

API="https://tranquil-thicket-56465.herokuapp.com"
URL_PATH="/uploads"

curl "${API}${URL_PATH}/${ID}" \
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

echo
