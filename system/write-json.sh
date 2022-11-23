# script to add property to existing json object
# first it redirect the output to tmp file and then move it to the real file

# todo customize the script to accept properties and file name as parameters
jq '. |= . + {age:21}' osama.json > tmp.json && mv tmp.json osama.json 