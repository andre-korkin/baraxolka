import json
import random


files = [
	'bp.csv',
	'cool_case.csv',
	'cool_cpu.csv',
	'cpu.csv',
	'hdd.csv',
	'mb.csv',
	'ram.csv',
	'vc.csv'
]

arr_res = []

for file in files:
	with open(file) as f:
		lines = f.readlines()

	columns = lines[0].strip().split(';')
	lines = lines[1:]

	for line in lines:
		line_dict = {}
		vals = line.strip().split(';')

		for i in range(len(vals)):
			line_dict[columns[i]] = vals[i]

		arr_res.append(line_dict)

random.shuffle(arr_res)
print(arr_res)
