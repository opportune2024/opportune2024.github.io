import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            job = {
                "Job Title": row[0],
                "Company": row[1],
                "Location": row[2],
                "Role": row[3],
                "Application Link": row[4]
            }
            data.append(job)
    
    with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
        json.dump(data, jsonfile, indent=4)

# Example usage
csv_file_path = 'jobs.csv'
json_file_path = 'jobs.json'
csv_to_json(csv_file_path, json_file_path)
