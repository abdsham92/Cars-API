#! /bin/bash

# https://stackoverflow.com/questions/19331497/set-environment-variables-from-file-of-key-value-pairs
# export .env variables
set -a
export $(grep -v '^#' ../.env | xargs -d '\n')

echo ""
echo "-------------------------------------"
echo ""

# https://chatgpt.com/share/67c655ea-34e0-8004-9301-520420f29a3a
# Connect and drop all collections
mongosh "$MONGO_URI" --eval '
  db.getCollectionNames().forEach(function(collectionName) {
    if (!collectionName.startsWith("system.")) {
      db.getCollection(collectionName).drop();
      print("Dropped collection: " + collectionName);
    }
  });
'

echo ""
echo "-------------------------------------"
echo ""

# All of the curl commands are taken from Postman

curl --location 'http://localhost:5000/api/carModels' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "Car Models",
    "nextProperty": "model",
    "options": [
        {
            "label": "Audi",
            "value": "Audi"
        },
        {
            "label": "BMW",
            "value": "BMW"
        },
        {
            "label": "VW",
            "value": "VW"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "Audi Models",
    "nextProperty": "registrationMonth",
    "model": "Audi",
    "options": [
        {
            "label": "A4",
            "value": "A4"
        },
        {
            "label": "A6",
            "value": "A6"
        },
        {
            "label": "A8",
            "value": "A8"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "BMW Models",
    "nextProperty": "registrationMonth",
    "model": "BMW",
    "options": [
        {
            "label": "3-Series",
            "value": "3-Series "
        },
        {
            "label": "5-Series ",
            "value": "5-Series "
        },
        {
            "label": " 7-Series ",
            "value": "7-Series "
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "VW Models",
    "nextProperty": "registrationMonth",
    "model": "VW",
    "options": [
        {
            "label": "Golf",
            "value": "Golf "
        },
        {
            "label": "Polo",
            "value": "Polo"
        },
        {
            "label": "Passat",
            "value": "Passat"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id" : "Audi Registration Month",
    "nextProperty": "registrationYear",
    "model": "Audi",
    "options": [
        {
            "label": "January",
            "value": "1"
        },
        {
            "label": "May",
            "value": "1"
        },
        {
            "label": "December",
            "value": "12"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id" : "BMW Registration Month",
    "nextProperty": "registrationYear",
    "model": "BMW",
    "options": [
        {
            "label": "January",
            "value": "25"
        },
        {
            "label": "May",
            "value": "10"
        },
        {
            "label": "December",
            "value": "17"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id" : "VW Registration Month",
    "nextProperty": "registrationYear",
    "model": "VW",
    "options": [
        {
            "label": "January",
            "value": "15"
        },
        {
            "label": "May",
            "value": "23"
        },
        {
            "label": "December",
            "value": "6"
        }
    ]
}'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "Audi Registration Year",
    "nextProperty": null,
    "model": "Audi",
    "options": [
        {
            "label": "2025",
            "value": "2025"
        },
        {
            "label": "2025",
            "value": "2025"
        },
        {
            "label": "2010",
            "value": "2010 "
        }
    ]
}
'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "BMW Registration Year",
    "nextProperty": null,
    "model": "BMW",
    "options": [
        {
            "label": "2006",
            "value": "2006"
        },
        {
            "label": "2013",
            "value": "2013"
        },
        {
            "label": "2017",
            "value": "2017 "
        }
    ]
}
'

echo ""
echo ""
echo "-------------------------------------"
echo ""

curl --location 'http://localhost:5000/api/carInfo' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "VW Registration Year",
    "nextProperty": null,
    "model": "VW",
    "options": [
        {
            "label": "2020",
            "value": "2020"
        },
        {
            "label": "2001",
            "value": "2001"
        },
        {
            "label": "2009",
            "value": "2009 "
        }
    ]
}
'
