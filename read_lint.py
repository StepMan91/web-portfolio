import json

try:
    with open('lint_report.json', 'r', encoding='utf-16') as f:
        data = json.load(f)
        print(json.dumps(data, indent=2))
except Exception as e:
    print(f"Error reading utf-16: {e}")
    try:
        with open('lint_report.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            print(json.dumps(data, indent=2))
    except Exception as e2:
        print(f"Error reading utf-8: {e2}")
