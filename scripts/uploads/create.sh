#!/bin/bash

API="http://localhost:4741"
URL_PATH="/uploads"

curl "${API}${URL_PATH}" \
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
