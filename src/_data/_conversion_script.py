import json
from emoji import EMOJI_DATA

with open("emoji.json", "w") as outfile:
    json_object = json.dumps(EMOJI_DATA, indent=4)
    outfile.write(json_object)

