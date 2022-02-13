import json


res = {}

with open('db') as f:
	lines = f.readlines()

for line in lines:
	line = line.strip()
	if line[-1] == ',':
		line = line[:-1]

	line = line[1:-1]
	fields = line.split(',')

	line_dict = {}
	for field in fields:
		field = field.strip()
		key, val = field.split(': ')
		key = key[1:-1]
		if val[0] == '\'':
			val = val[1:-1]
		line_dict[key] = val

	res[line_dict['Артикул']] = line_dict

db = {}
db['goods'] = res

with open('goods.json', 'w') as f:
	json.dump(db, f)
